const userInput = prompt(`Enter your numbers separated by commas`);

const numString = userInput.split(`,`);
console.log(`Number of Strings`, numString);

const statNumbers = [];

for (let index = 0; index < numString.length; index++) {
  console.log('INDEX: ', index);
  console.log('INDEX: ', numString[index]);

  statNumbers.push(Number(numString[index]));
  console.log('STAT NUMBERS: ', statNumbers);
}






