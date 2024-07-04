const buttonElement = document.getElementById("convert-btn");
const outputElement = document.getElementById("output");

const arabicNumerals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

const romanNumerals = [
  "I",
  "IV",
  "V",
  "IX",
  "X",
  "XL",
  "L",
  "XC",
  "C",
  "CD",
  "D",
  "CM",
  "M",
];

function convertToRoman(num) {
  let romanNumeral = "";
  for (let i = arabicNumerals.length - 1; i >= 0; i--) {
    while (num >= arabicNumerals[i]) {
      romanNumeral += romanNumerals[i];
      num -= arabicNumerals[i];
    }
  }

  return romanNumeral;
}

function cleanOutput() {
  outputElement.innerHTML = "";
}

buttonElement.addEventListener("click", () => {
  cleanOutput();

  const inputElement = document.getElementById("number");
  const inputValueElement = parseInt(document.getElementById("number").value);

  if (isNaN(inputValueElement)) {
    outputElement.innerHTML = `<p>Please enter a valid number</p>`;
  } else if (inputValueElement <= -1) {
    outputElement.innerHTML += `<p>Please enter a number greater than or equal to 1</p>`;
  } else if (inputValueElement >= 4000) {
    outputElement.innerHTML += `<p>Please enter a number less than or equal to 3999</p>`;
  } else {
    outputElement.innerHTML += `<p>${convertToRoman(inputValueElement)}</p>`;
  }

  convertToRoman(inputValueElement);

  console.log(convertToRoman(inputValueElement));
});
