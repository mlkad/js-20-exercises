//1
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("h1").textContent = "JavaScript can do many things";
});

//2
document.getElementById("sea").onclick = function () {
  document.getElementById("img").src = "wave.jpg.avif";
};

document.getElementById("forest").onclick = function () {
  document.getElementById("img").src = "forest.webp";
};

//3
document.getElementById("font").onclick = function () {
  document.getElementById("text-3").style.fontWeight = "900";
};

//4
document.getElementById("hide").onclick = function () {
  document.getElementById("text-4").hidden = true;
};

document.getElementById("show").onclick = function () {
  document.getElementById("text-4").hidden = false;
};

//5
console.log("Hello, World!");

//6
let age = 18;
let name = "Malika";
let answer = "true";

console.log(`Hello. I'm ${name}. Nice to meet you`);
console.log(`I'm ${age} y.o`);
console.log(`- Am I study in AITU?\n- ${answer}`);

//7

// let num1 = +prompt("Enter 1 number:");
// let num2 = +prompt("Enter 2 number:");
// let sum = num1 + num2;
// document.getElementById("sum").textContent = sum;

//8
document.getElementById("date-btn").onclick = function () {
  document.getElementById("date").textContent = Date();
};

//9

// let year = prompt('Enter year you want to check:', '');
// alert(year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);

//10
function multiplyBy() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;

  document.getElementById("res").textContent = +num1 * +num2;
}

function divideBy() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;

  document.getElementById("res").textContent = +num1 / +num2;
}

//11

const toCelsius = (far) => {
  console.log((5 * (far - 32)) / 9);
};

toCelsius(45);

const toFahrenheit = (cel) => {
  console.log(1.8 * cel + 32);
};

toFahrenheit(60);

//12

const EvenOrOdd = (num) => {
  let res = "";
  if (num % 2 == 0) {
    res = "even";
  } else {
    res = "odd";
  }
  console.log(res);
};

EvenOrOdd(4);

//13

const findMax = (num1, num2, num3) => {
  let max;
  if (num1 >= num2 && num1 >= num3) {
    max = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    max = num2;
  } else {
    max = num3;
  }
  console.log(max);
};

findMax(2, 9, 5);

const findMin = (num1, num2, num3) => {
  let min;
  if (num1 <= num2 && num1 <= num3) {
    min = num1;
  } else if (num2 <= num1 && num2 <= num3) {
    min = num2;
  } else {
    min = num3;
  }
  console.log(min);
};
findMin(4, 8, 1);

//14

const areaOfTriange = (a, b, c) => {
  let s = (a + b + c) / 2;
  let area = (s * (s - a) * (s - b) * (s - c)) ** 0.5;
  area = Math.floor(area);
  return area;
  console.log(area);
};

let calculatedArea = areaOfTriange(5, 6, 7);

document.querySelector("#area-show").onclick = function () {
  document.querySelector("#area").textContent = calculatedArea;
};

//15
const getFactorial = (num) => {
  let res = 1;
  for (let i = num; i > 0; i--) {
    res *= i;
  }
  return res;
};
console.log(getFactorial(5));

//16
const vowels = ["a", "e", "i", "o", "u", "y"];
const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let countLetters = (str) => {
  let vowelCounter = 0;
  let consonantsCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCounter++;
    }
    if (consonants.includes(str[i])) {
      consonantsCounter++;
    }
  }
  return `vowels: ${vowelCounter}, consonants: ${consonantsCounter}`;
};

console.log(countLetters("aaaaaaabbbbbbb"));

//17

let fromSeconds = (sec) => {
  let min;
  let hours;
  if (sec >= 60) {
    min = sec / 60;
  } else if (min >= 60) {
    hours = min / 60;
  }
  return `min: ${min}, hours: ${hours}`;
};

console.log(fromSeconds(1000));

//18
let findMost = (arr) => {
  let frequencyMap = {};
  let mostFrequent = arr[0];
  let maxCount = 0;

  arr.forEach((num) => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;

    if (frequencyMap[num] > maxCount) {
      maxCount = frequencyMap[num];
      mostFrequent = num;
    }
  });

  return mostFrequent;
};

//19
let findFibonacci = (n) => {
  return n <= 1 ? n : findFibonacci(n - 1) + findFibonacci(n - 2);
};
console.log(findFibonacci(7));

//20
let daysBeforeNewYear = () => {
  const today = new Date();

  const nextYear = today.getFullYear() + 1;
  const newYearDate = new Date(nextYear, 0, 1);

  const timeDifference = newYearDate - today;

  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysLeft;
};

console.log(` ${daysBeforeNewYear()}`);
