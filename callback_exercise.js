//Bài 1: hoàn thành function sumCb và tạo thêm các function subCb, multiCb và divCb.
function sumCb(a, b) {
  return a + b;
}

function subCb(a, b) {
  return a - b;
}

function multiCb(a, b) {
  return a * b;
}

function divCb(a, b) {
  return a / b;
}

function caculate(a, b, cb) {
  return cb(a, b);
}

// Expected results
caculate(1, 2, sumCb); // Output: 3
caculate(1, 2, subCb); // Output: -1
caculate(1, 2, multiCb); // Output: 2
caculate(3, 1, divCb); // Output: 3

//Bài 2: tạo ra phương thức myMap hoạt động tương tự phương thức map2 và map nhé.
Array.prototype.myMap = function (cb) {
  var newArray = [];

  for (var i = 0; i < this.length; i++) {
    newArray.push(cb(this[i], i));
  }

  return newArray;
};

// Expected results
const numbers = [1, 2, 3];

console.log(
  numbers.myMap(function (number) {
    return number * 2;
  }),
); // Output: [2, 4, 6]

console.log(
  numbers.myMap(function (number, index) {
    return number * index;
  }),
); // Output: [0, 2, 6]
