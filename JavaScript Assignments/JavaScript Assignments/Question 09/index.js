/* 09. Boolean value is either true or false.
- Write three JavaScript statement example which provide truthy value.
- Write three JavaScript statement example which provide falsy value. */

//Falsy values : Falsy values are not exaclty false but when we try to convert them into boolean they becomes false (evalates to false)
// There are only 5 falsy values in JS e.g. 0, undefined, null, NaN, ""(empty string)

console.log(Boolean(null)); //false
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(undefined)); //false

if (null) {
  console.log("if block executed"); // null will be evaluated as false
} else {
  console.log("else block executed");
}

if (0) {
  console.log("if block executed"); // 0 will be evaluated as false
} else {
  console.log("else block executed");
}

if (NaN) {
  console.log("if block executed"); // NaN will be evaluated as false
} else {
  console.log("else block executed");
}

// Truthy Values : Similarly truthy values are also not true but when we try to convert them into boolean they becomes true. Apart from false and falsy values all other values are truthy values.

console.log(Boolean(1));
console.log(Boolean("rushi"));
console.log(Boolean({}));

if (1) {
  console.log("if block executed");
} else {
  console.log("else block executed");
}

if ("savi") {
  console.log("if block executed");
} else {
  console.log("else block executed");
}

if ({}) {
  console.log("if block executed"); // {} will be evaluated as true
} else {
  console.log("else block executed");
}
