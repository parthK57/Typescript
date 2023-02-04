"use strict";
const num1Element = document.querySelector("#num1");
const num2Element = document.querySelector("#num2");
const btn = document.querySelector("button");
// Primitive way
// const intArray : number[] = [];
// const stringArray : string[]  = [];
// Generic way
const intArray = [];
const stringArray = [];
function add() {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const intResult = +num1 + +num2;
    intArray.push(intResult);
    console.log(intArray);
    const stringResult = num1 + " " + num2;
    stringArray.push(stringResult);
    console.log(stringArray);
    printObj(intResult);
}
function printObj(intVal) {
    const obj = { value: intVal, timestamp: new Date() };
    console.log(obj);
}
btn.addEventListener("click", add);
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It is resolved!");
    }, 1000);
});
myPromise.then((res) => console.log(res));
