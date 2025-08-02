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
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var names = ['Musa', "Mehmet", "Mehemmed", "Metin"];
var isVariable = [true, false, true, false, true, false];
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
;
console.log(getRandomElement(numbers));
console.log(getRandomElement(names));
console.log(getRandomElement(isVariable));
