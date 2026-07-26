// Bài 1: Viết hàm reverseString(str) nhận vào một chuỗi và trả về chuỗi đảo ngược của nó.

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// reverseString("hello");

// result = reverseString("hello");

// console.log(result);

//Bài 2: Viết hàm countChar(str, char) đếm xem ký tự char xuất hiện bao nhiêu lần trong chuỗi str (không phân biệt chữ hoa và chữ thường).

// function countChar(str, char) {
//   var count = 0;
//   var lowerString = str.toLowerCase();

//   for (var i = 0; i < lowerString.length; i++) {
//     if (lowerString[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }
// var result = countChar(
//   "Lúa nếp là lúa nếp làng. Lúa lên lớp lớp, lòng nàng lâng lâng",
//   "l",
// );
// console.log(result);

// Bài 3: Viết hàm capitalizeWords(str) chuyển đổi chữ cái đầu tiên của mỗi từ trong chuỗi thành chữ hoa.
//cách 1:

// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }
// var result = capitalizeWords("anh trai vượt ngàn chông gai");
// console.log(result);

//Cách 2:

function capitalizeWords(str) {
  var array = [];
  var splitStrings = str.split(" ");
  for (var i = 0; i < splitStrings.length; i++) {
    var string = splitStrings[i];
    var firstChar = string[0].toUpperCase();
    var otherChar = string.slice(1);
    array.push(firstChar + otherChar);
  }

  return array.join(" ");
}
var result = capitalizeWords("anh trai vượt ngàn chông gai");
console.log(result);

//Bài 4: Viết hàm isBlank(str) trả về true nếu chuỗi rỗng hoặc chỉ chứa khoảng trắng, ngược lại trả về false.
// function isBlank(str) {
//   if (!str.length) {
//     return true;
//   }
//   return false;
// }
// var result = isBlank("");
// console.log(result);

//Bài 5: Viết hàm truncate(str, maxLength) nếu chuỗi dài hơn maxLength, hãy cắt chuỗi và thêm "..." vào cuối sao cho tổng độ dài bao gồm cả dấu ba chấm bằng maxLength.
// function truncate(str, maxLength) {
//   if (str.length < maxLength) {
//     return str;
//   }
//   return str.slice(0, maxLength + 1) + "...";
// }
// var result = truncate("Anh trai vượt ngàn chông gai 2026", 7);
// console.log(result);
