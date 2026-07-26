//Bài 1: Kiểm tra dữ liệu truyền vào có phải là 1 số hay không?
// function isNumber(value) {
//   var result = false;

//   if (typeof value === "number" && !isNaN(value)) {
//     result = true;
//   }

//   return result;
// }
// console.log(isNumber(999)); // true
// console.log(isNumber("abc")); // false
// console.log(isNumber("100")); // false
// console.log(isNumber(NaN)); // false
// console.log(isNumber(100 / "abc")); // false

// Bài 2: Viết hàm parseStringToNumber(str) nhận vào một chuỗi và trả về số tương ứng.
function parseStringToNumber(str) {
  var error = "Không hợp lệ";
  if (!str.length) {
    return error;
  }
  var trimString = str.trim();
  var regex = /^\d+(\.\d+)?$/;
  var checkAlphabet = regex.test(trimString);
  if (!checkAlphabet) {
    return error;
  }
  return parseFloat(str);
}
// console.log(parseStringToNumber("123"));
// console.log(parseStringToNumber("123 2221"));
// console.log(parseStringToNumber(" 23221 "));
// console.log(parseStringToNumber("hihiiiiiiii"));
// console.log(parseStringToNumber(""));
// console.log(parseStringToNumber("@@@@@"));
// console.log(parseStringToNumber("2,11"));
// console.log(parseStringToNumber("bjjb fhfhh"));

// Bài 3: Viết hàm checkEvenOdd(n) nhận vào một số nguyên n và kiểm tra xem đó là số chẵn hay số lẻ.
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Chẵn";
  }
  return "Lẻ";
}
//

//Bài 4: Viết hàm formatCurrency(amount) làm tròn số tiền amount đến 2 chữ số thập phân và trả về kết quả dưới dạng chuỗi.
function formatCurrency(amount) {
  return amount.toFixed(2);
}
// console.log(formatCurrency(10.234567777));

//Bài 5: Viết hàm checkInteger(val) kiểm tra xem giá trị val truyền vào có phải là một số nguyên hay không.
function checkInteger(val) {
  if (Number.isInteger(val)) {
    return true;
  }
  return false;
}
// console.log(checkInteger(10.8));
