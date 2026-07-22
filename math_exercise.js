//Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.

function getRandomItem(array) {
  var random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Ví dụ
var items = Array.from({ length: 10 });
var result = getRandomItem(items);

console.log("result", result);
