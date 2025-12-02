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

// #2

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

// #9
let array9 = [2, 4, 123, 44].reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, ",");

console.log(array9);
