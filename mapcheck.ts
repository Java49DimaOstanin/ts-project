let str = "abc";

let charStrArr = Array.from(str);
let charCode = charStrArr.map(e => e.charCodeAt(0));
console.log(charCode);