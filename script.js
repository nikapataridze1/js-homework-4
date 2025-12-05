// 1

let array1 = [14, 150, "css", null, "javascript", 25];

let newArray1 = array1.map(function (item) {
  if (typeof item == "number") {
    return item * item;
  } else if (typeof item == "string") {
    return item.toUpperCase();
  } else {
    return item;
  }
});

console.log(newArray1);

// #2  დაკომენტარებულია რონ არ გამოხტეს ყველა სეივზე

// let question = prompt("Capital of Georgia?");
// let answer = "tbilisi";
// let checkedPrompt;

// if (question.toLowerCase() === answer) {
//   checkedPrompt = "სწორია";
// } else {
//   checkedPrompt = "არასწორია";
// }

// console.log(checkedPrompt);

// #3
let array2 = ["hello1", 14, 24, "hello2"];

let newArray2 = array2.filter(function (item) {
  if (typeof item == "number") {
    return item;
  }
});

console.log(newArray2);

//  #4
let languages = ["html", "css", "javascript", "python", "php"];

let newLanguages = languages.filter(function (item) {
  return item.length > 3;
});

console.log(newLanguages);

// #5
let words = ["Madrid", "rome", "Milan", "berlin"];

let newWords = words.filter(function (item) {
  return item.includes("m") || item.includes("M");
});

console.log(newWords);

// #6
let link = "https://google.com";

function check(text) {
  if (text.includes("https://")) {
    return "yes";
  } else {
    return "no";
  }
}

let linkChecked = check(link);
console.log(linkChecked);

// #7
let array7 = [5, 4, 3, 2, 1];

let newArray7 = array7.map(function (el) {
  return el * el;
});

console.log(newArray7);

// #8

let text = "12345";

let arrayFromText = text
  .split("")
  .map(Number)
  .reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });

console.log(arrayFromText);

// #9
let array9 = [2, 4, 123, 44];

let sumReduce = function (accumulator, currentValue) {
  return accumulator + currentValue;
};

let summedAray9 = array9.reduce(sumReduce);
console.log(summedAray9);

// #10
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let concatArray = arr1.concat(arr2).concat(arr3);
console.log(concatArray);

// #11
let unknownArray = [123, "apple", "mango", "lemon"];

let splicedArray = unknownArray.splice(-2, 1, "strawberry");
console.log(unknownArray);

// #12
let info = "good day";
let newInfo = info.slice(-3);
console.log(newInfo);

// #13

let length = function (el) {
  return el.length;
};

console.log(length(info));

// #14

let array14 = [5, 25, 89, 120, 36];

array14.push("javascript", "python");
array14.unshift("html", "css");
console.log(array14.length);
let newArray14 = array14.slice(1, -1);
console.log(newArray14);

// #15

// #16
let array16 = [1, 2, 3, 4, 5];
let newArray16 = array16.splice(2, 0, "a", "b", "c");

console.log(array16);
// #17
let array17 = [15, 100, 25, 10, 36];

let newArray17 = array17.filter(function (item) {
  return item != 10;
});
console.log(newArray17);

// #18
let array18 = [1, 2, 3, 4, 5];

let splicedArray19 = array18.splice(2, 1, "three");
console.log(array18);
// #19
let array19 = [14, 150, "css", null, "javascript", 25];

let mappedArray19 = array19.map(function (el) {
  if (typeof el == "number") {
    return el * el;
  } else if (typeof el == "string") {
    return el.toUpperCase();
  } else {
    return el;
  }
});

console.log(mappedArray19);
// #20
let array20 = [12, 25, 3, 6, 8, 14, 7, 23];

let mappedArray20 = array20.map(function (item) {
  return item / 3;
});
console.log(mappedArray20);
// #21
let array21 = ["apple", "orange", "mango", "kiwi"];

let splicedArray21 = array21.splice(2, 0, "strawberry", "avocado");
console.log(array21);

// #22
let numbers = [12, 56, 18, 35, 10];

let evenNumbers = numbers.filter(function (el) {
  if (el % 2 == 0) {
    return el;
  } else {
    return;
  }
});

console.log(evenNumbers);
// #23
let array23 = [1, 2, 3, 4, 5];

let multiplied = array23.reduce(function (accumulator, currentValue) {
  return accumulator * currentValue;
});
console.log(multiplied);
