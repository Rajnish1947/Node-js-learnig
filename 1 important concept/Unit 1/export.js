// with module jab esko run karna ho tab type:module in json file ese
//- ES Module
// export function sum(a, b) {
//     return a + b;
// }

// export const diff = (a, b) => {
//     return a - b;
// }

//without module
//- CommonJS Module

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

module.exports = { sum, diff };
