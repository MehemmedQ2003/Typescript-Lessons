interface Months<U, V> {
    key: U,
    value: V
};

let month: Months<number, string> = {
    key: 1,
    value: "January"
};

console.log(month);
