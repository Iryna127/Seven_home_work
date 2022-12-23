//First task

const framework = ["AngularJS", "jQuery"];
framework.unshift("Backbone.js");
console.log(framework);
framework.push("ReactJS", "Vue.js");
console.log(framework);
framework.splice(1, 0, "CommonJS");
console.log(framework);

const findResult = framework.filter((word) => word == "jQuery");
framework.splice(framework.indexOf("jQuery"), 1);
console.log(framework);
console.log(`Этот элемент лишний - ${findResult}`);

//Secon task

const arrNew = (...rest) => rest;
function removeNegativeElements(rest) {
  return typeof rest === "string" || rest >= 0;
}
console.log(arrNew(-9, 2, 3, 0, -28, "value").filter(removeNegativeElements));
console.log(arrNew(-9, -21, -12).filter(removeNegativeElements));
console.log(arrNew("-102", 102).filter(removeNegativeElements));

function removeNegativeElements2(...args) {
  let result = [];
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "string" || args[i] >= 0) {
      result.push(args[i]);
    }
  }
  return result;
}
console.log(removeNegativeElements2(-9, 2, 3, 0, -28, "value"));
console.log(removeNegativeElements2(-9, -21, -12));
console.log(removeNegativeElements2("-102", 102));

//Third task

const stringArr = (...rests) => rests;
function getStringElements(rests) {
  return typeof rests === "string";
}
console.log(
  arrNew(1, true, 42, "red", 64, "green", "web", new Date(), -898, false).filter(getStringElements)
);

function getStringElements1(...strargs) {
  let stringResult = [];
  for (let i = 0; i < strargs.length; i++) {
    if (typeof strargs[i] === "string") {
      stringResult.push(strargs[i]);
    }
  }
  return stringResult;
}
console.log(
  getStringElements1(1, true, 42, "red", 64, "green", "web",  new Date(),  -898, false)
  );

//Рекурсия

const generatearr = () =>
  [...Array(10)].map(() => Math.round(Math.random() * 10));
const numb = generatearr();
console.log(numb);
function calcSum(numb) {
  return numb.length ? numb.splice(0, 1)[0] + calcSum(numb) : 0;
}
console.log(calcSum(numb));
// Решила решить хоть так и следующий пример тоже!!!
 const arr1 = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];  
const num10 = arr1.filter((value) => value === 10);
let sumresult = 0;
num10.forEach((val) => {
sumresult += val;
})
console.log(sumresult)


//
const arr2 = [0, 2, 4, 5, 7, 10, 2, 3, 5, 6, 10, 3];  
const arrayMoreFive = arr2.filter((value) => value > 5);
console.log(arrayMoreFive);
