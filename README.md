# Number to Name
![GitHub](https://img.shields.io/github/license/billyjbryant/num-to-name?style=flat-square)

`num-to-name` is a nodeJs module that provides an easy way to convert a provided positive integer into it's fully qualified name. 

The motivation for this module was born from a Google search which led to [this answer](https://stackoverflow.com/a/23105974/13387374) on StackOverflow. 

The code is based on a similar solution found in https://www.npmjs.com/package/number2text which is intended for Indian Currency with optional English Language variant. I intend to 

### Usage:


#### Example:

```js
const numToName = require('num-to-name');

console.log(numToName(22));
// Twenty-Two

console.log(numToName(309));
// Three-Hundred-Nine

console.log(numToName(101, ' ');
// One Hundred One
```