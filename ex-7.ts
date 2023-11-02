// DIN UPPGIFT: Definiera en index signature för Dictionary-typen samt implementera funktionerna addWord och getDefinition. / 3 poäng

type Dictionary<T> = {
  // Index signature ska vara här
  [key: string]: T;
};

function addWord(
  dictionary: Dictionary<string>,
  word: string,
  definition: string
): string {
  // Implementera funktionen så att den lägger till ordet och definitionen i ordboken (dictionary).

  return (dictionary[word] = definition);
}

function getDefinition(
  dictionary: Dictionary<string>,
  word: string
): string | undefined {
  //   // Implementera funktionen så att den returnerar definitionen av ordet (word) om det finns i ordboken (dictionary).
  //   // Om ordet inte finns ska funktionen returnera undefined.
  return dictionary[word];
}

// Testa funktionerna
const myDictionary: Dictionary<string> = {};
addWord(
  myDictionary,
  "TypeScript",
  "A superset of JavaScript that adds static typing."
);
console.log(getDefinition(myDictionary, "TypeScript")); // Ska skriva ut "A superset of JavaScript that adds static typing."
addWord(myDictionary, "JavaScript", "A dynamic programming language.");
console.log(getDefinition(myDictionary, "JavaScript")); // Ska skriva ut "A dynamic programming language."
console.log(getDefinition(myDictionary, "Java")); // Ska skriva ut undefined
