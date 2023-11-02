// DIN UPPGIFT: Använd dig av unions för att skapa en typ Role som möjliggör alternativen i switch-satsen. Byt ut any mot passande typer.
// Kompilera TS-koden och se att den fortfarande fungerar som den ska. / 2 poäng

type Role = "Manager" | "Employee" | "CEO";

const describeRole = (role: Role): string => {
  switch (role) {
    case "Employee":
      return "You are an employee";
      break;
    case "Manager":
      return "You are a manager of people.";
      break;
    case "CEO":
      return "You are the CEO of the company.";
      break;
  }
};
const role = "Manager";

console.log(describeRole(role));
