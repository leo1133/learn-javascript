// Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length.
// Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

function getRandNumbers(min, max, length) {
  var array = [];

  for (var i = 0; i < length; i++) {
    array.push(Math.round(Math.random() * (max - min) + min));
  }

  return array;
}
var arrayNumbers = getRandNumbers(1, 10, 10);

console.log(arrayNumbers);
