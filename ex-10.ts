// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng

// 1. Ge ett exempel på en funktion med en generiskt typ.

const reverseArr = <T>(arr: T[]): T[] => {
  return arr.reverse();
};

const testArr = [
  {
    number: 1,
  },
  {
    number: 2,
  },
];

console.log(reverseArr(testArr));

// 2. Ge ett exempel på en funktion med två generiska typer.
const map = <T, U>(arr: T[], func: (arg: T) => U): U[] => {
  return arr.map(func);
};

const parsed = map(["1", "2", "3"], (number) => parseInt(number));
console.log(parsed);

// 3. Ge ett exempel på ett interface med en generisk typ.

interface keyPair<T, U> {
  key: T;
  value: U;
}
