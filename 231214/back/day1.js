//day1.js
console.log("day1.js 문서");

/*
package.json type 속성 변경
import * as math from "./math";
console.log(math);
*/

const { PI, square } = require("./math");
console.log(PI);
console.log(square(6));
