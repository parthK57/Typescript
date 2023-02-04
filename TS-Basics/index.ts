const num1Element = document.querySelector("#num1") as HTMLInputElement;
const num2Element = document.querySelector("#num2") as HTMLInputElement;
const btn = document.querySelector("button")!;

type NumOrString = number | string;
// type objResult = {
// 	value: number;
// 	timestamp: Date;
// }

type result = {
  value: number;
  timestamp: Date;
};
type objResult = result;

// Primitive way
// const intArray : number[] = [];
// const stringArray : string[]  = [];

// Generic way
const intArray: Array<number> = [];
const stringArray: Array<string> = [];

function add() {
  const num1: NumOrString = num1Element.value;
  const num2: NumOrString = num2Element.value;
  const intResult = +num1 + +num2;
  intArray.push(intResult);
  console.log(intArray);
  const stringResult = num1 + " " + num2;
  stringArray.push(stringResult);
  console.log(stringArray);
  printObj(intResult);
}

function printObj(intVal: number) {
  const obj: result = { value: intVal, timestamp: new Date() };
  console.log(obj);
}

btn.addEventListener("click", add);

const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("It is resolved!");
  }, 1000);
});

myPromise.then((res) => console.log(res));
