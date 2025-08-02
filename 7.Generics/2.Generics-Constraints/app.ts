function merge<U extends object, V extends object>(obj1 : U, obj2 : V) {
    return {
        ...obj1,
        ...obj2
    }
};

const mergedObj = merge({name : "Muhammad"}, {age : 20});
console.log(mergedObj);