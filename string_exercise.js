// Bài 1: Viết hàm reverseString(str) nhận vào một chuỗi và trả về chuỗi đảo ngược của nó.

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// reverseString("hello");

// result = reverseString("hello");

// console.log(result);

//Bài 2: Viết hàm countChar(str, char) đếm xem ký tự char xuất hiện bao nhiêu lần trong chuỗi str (không phân biệt chữ hoa và chữ thường).

function countChar(str, char) {
  var count = 0;
  var lowerString = str.toLowerCase();

  for (var i = 0; i < lowerString.length; i++)
    if (lowerString[i] === char) count++;

  return count;
}
var result = countChar(
  "Lúa nếp là lúa nếp làng Lúa lên lớp lớp, lòng nàng lâng lâng",
  "l",
);

console.log(result);
