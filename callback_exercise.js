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
var numbers = [1, 2, 3];

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

//Bài 3: tạo ra phương thức myFilter hoạt động tương tự phương thức filter2 và filter
Array.prototype.myFilter = function (cb) {
  var newArray = [];

  for (var i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

// Expected results:
var numbers = [1, 2, 3, 4];

console.log(
  numbers.myFilter(function (number) {
    return number % 2 === 0;
  }),
);
Output: [2, 4];

console.log(
  numbers.myFilter(function (number, index) {
    return index % 2 === 0;
  }),
);
Output: [1, 3];

console.log(
  numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
  }),
);
Output: [1, 2, 3, 4];

//Bài 4: tạo ra phương thức mySome hoạt động tương tự phương thức some2 và some
Array.prototype.mySome = function (cb) {
  for (var i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }

  return false;
};

// Expected results:

var numbers = [1, 3, 3, 5];

console.log(
  numbers.mySome(function (number) {
    return number % 2 === 0;
  }),
);
Output: false;

console.log(
  numbers.mySome(function (number, index) {
    return index % 2 === 0;
  }),
);
Output: true;

console.log(
  numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
  }),
);
Output: true;

//Bài 5: tạo ra phương thức myEvery hoạt động tương tự phương thức every2 và every
Array.prototype.myEvery = function (cb) {
  for (var i = 0; i < this.length; i++) {
    if (cb(this[i], i, this) === false) {
      return false;
    }
  }
  return true;
};

// Expected results

var numbers = [1, 3, 3, 5];

console.log(
  numbers.myEvery(function (number) {
    return number % 2 !== 0;
  }),
); // Output: true

console.log(
  numbers.myEvery(function (number, index) {
    return index % 2 === 0;
  }),
); // Output: false

console.log(
  numbers.myEvery(function (number, index, array) {
    return array.length % 2 === 0;
  }),
); // Output: true
