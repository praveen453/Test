#!/usr/bin/env node

if (process.argv.length !== 5) {
  console.log('Usage: node calculator.js <add|sub|mul|div> <num1> <num2>');
  process.exit(1);
}

const [, , op, aStr, bStr] = process.argv;
const a = parseFloat(aStr);
const b = parseFloat(bStr);

if (isNaN(a) || isNaN(b)) {
  console.log('Both operands must be numbers.');
  process.exit(1);
}

let result;

switch (op) {
  case 'add':
    result = a + b;
    break;
  case 'sub':
    result = a - b;
    break;
  case 'mul':
    result = a * b;
    break;
  case 'div':
    if (b === 0) {
      console.log('Cannot divide by zero.');
      process.exit(1);
    }
    result = a / b;
    break;
  default:
    console.log('Unknown operation. Use add, sub, mul, or div.');
    process.exit(1);
}

console.log(result);
