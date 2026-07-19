//Kiểm tra dữ liệu truyền vào có phải là 1 số hay không?

function isNumber(value) {
  var result = false;

  if (typeof value === "number" && !isNaN(value)) {
    result = true;
  }

  return result;
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber("abc")); // false
console.log(isNumber("100")); // false
console.log(isNumber(NaN)); // false
console.log(isNumber(100 / "abc")); // false
