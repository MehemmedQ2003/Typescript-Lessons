let stringArr: string[] = ["a", "b", "c"];
console.log(stringArr);

let values: Array<number | string> = [1, "a", 2, "b"];
console.log(values);


let allTypes: Array<any>;
allTypes = [1, "a", 2, "b", true, false];
for(let i = 0; i < allTypes.length; i++){
    console.log(allTypes[i]);
}