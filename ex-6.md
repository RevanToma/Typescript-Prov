### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel.

Svar: Interfaces: används ofta för att strukturera ett object. ( interface { user{name:string, age:number}; data: string[]} ). Med interfaces så man kan även extenda dem och merga dem med andra interfaces. Interfaces är mest populära när man jobbar med classer för att en class kan extenda interfaces det kan inte en type.

types: Types används ofta för att type dem primitiva values, unions,tuple. (type user = {age: number, name:string}). Den största skillnaden är att med typer så kan man skapa väldigt komplexa typer och samt att man kan använda sig utav guards som typeof.

Använda interfaces eller typer?

interfaces:

- Jobbar med classer (object orientering)
- Ett nytt objekt eller en objektmetod måste definieras.
- Ifall man vill använda sig utav merging

typer:

- Jobbar med primitive-type alias
- tuples
- unions
- maped types
- Komplexa typer och använda sig utav typeof
