// DIN UPPGIFT: Du ska fetcha från Pokemon API:et och validera med hjälp av valideringsbiblioteket Zod.
// Du ska ska skapa ett Zod-schema som validerar datan som kommer från API:et, där endast name, height och weight är datan som tas emot och valideras
// Den validerade datan  ska användas för att beräkna BMI för en Pokemon. BMI ska sedan loggas till konsolen för en Pokemon som du själv väljer.

// Obs! Detta ska vara en Node-applikation, så använd lämplig "fetch", axios eller liknande för att hämta data från API:et.
// Utifrån Zod-schemat ska du också skapa en typ för Pokemon (använd lämplig Zod-metod för detta). Du ska använda dig
// av den härlädda Pokemontypen i din kod. / Poäng: 8 poäng

// Endpoint: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

/* FORMEL FÖR BMI. Tydligen är vikten i hectograms och höjden i decimeters för Pokemons :-)
const weightInKg = pokemon.weight / 10;
const heightInM = pokemon.height / 10;
const bmi = weightInKg / (heightInM * heightInM);
*/

import { z } from "zod";
const pokemonName = "ditto";
const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

const pokeObject = z.object({
  name: z.string(),
  height: z.number(),
  weight: z.number(),
});

const fetchPoke = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    return "Something went wrong with the network request";
  }
  const data = response.json();

  return data;
};

const countBmi = (weight: number, height: number): number => {
  const weightInKg = weight / 10;
  const heightInM = height / 10;

  return weightInKg / (heightInM * heightInM);
};

fetchPoke(endpoint).then((data) => {
  const validatedPoke = pokeObject.parse(data);

  const bmi = countBmi(validatedPoke.weight, validatedPoke.height);
  console.log(`My pokemon ${validatedPoke.name} has ${bmi.toFixed(2)} bmi`);
});
