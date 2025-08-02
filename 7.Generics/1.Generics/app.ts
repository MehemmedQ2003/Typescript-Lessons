// function getRandomNumber(items: number[]): number {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// };
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(getRandomNumber(numbers));


// function getRandomString(items: string[]): string {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// };
// let names = ['Musa', "Mehmet", "Mehemmed", "Metin"];
// console.log(getRandomString(names));


// function getRandomElement(items: any[]): any {
//     let randomIndex = Math.floor(Math.random() * items.length);
//     return items[randomIndex];
// };

// console.log(getRandomElement(numbers));
// console.log(getRandomElement(names));


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ['Musa', "Mehmet", "Mehemmed", "Metin"];
let isVariable = [true, false, true, false, true, false];

function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
};
console.log(getRandomElement<number>(numbers));
console.log(getRandomElement<string>(names));
console.log(getRandomElement<boolean>(isVariable));