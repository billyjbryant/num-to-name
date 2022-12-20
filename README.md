# Number to Name
![GitHub package.json version](https://img.shields.io/github/package-json/v/billyjbryant/num-to-name?style=flat-square) ![npm (scoped)](https://img.shields.io/npm/v/@billyjbryant/num-to-name?color=blue&style=flat-square) ![GitHub](https://img.shields.io/github/license/billyjbryant/num-to-name?style=flat-square) ![GitHub top language](https://img.shields.io/github/languages/top/billyjbryant/num-to-name?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues/billyjbryant/num-to-name?style=flat-square) ![npm](https://img.shields.io/npm/dt/@billyjbryant/num-to-name?style=flat-square)

`num-to-name` is a nodeJs module that provides an easy way to convert a provided positive integer into it's fully qualified name. 

The motivation for this module was born from a Google search which led to [this answer](https://stackoverflow.com/a/23105974/13387374) on StackOverflow. 

The code is based on a similar solution found in https://www.npmjs.com/package/number2text which is intended for Indian Currency with optional English Language variant. I intend to expand to addition
## Installation:
`npm install --save @billyjbryant/num-to-name`
## Usage:


### Example:

```js
const numToName = require('@billyjbryant/num-to-name');

console.log(numToName(22));
// Twenty-Two

console.log(numToName(222));
// Two-Hundred-Twenty-Two

console.log(numToName(222, " "));
// Two Hundred Twenty-Two

console.log(numToName(222, '_'));
// Two_Hundred_Twenty-Two

console.log(numToName(2222));
// Two-Thousand-Two-Hundred-Twenty-Two
```