function decimalToBinary(num) {
  if (num === 0) {
    return '0';
  }
  
  let binary = '';
  
  while (num > 0) {
    const remainder = num % 2;
    binary = remainder + binary;
    num = Math.floor(num / 2);
  }
  
  return binary;
}

// You can test the function like this:
const inputNumber = prompt("Enter a decimal number:");
const binaryEquivalent = decimalToBinary(Number(inputNumber));
alert(binaryEquivalent);
