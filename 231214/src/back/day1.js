// day1.js
console.log("day1.js 문서");

/* 
package.json type속성 변경

import * as math from "./math";
console.log(math);
*/

const { PI, square, add } = require("./math");
console.log(PI);
console.log(square(6));
console.log(add(6, 10));

const drinks = require("./drinks");
console.log("음료", drinks);
