// Bài 1: Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length. Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

// function getRandNumbers(min, max, length) {
//   var array = [];

//   for (var i = 0; i < length; i++) {
//     array.push(Math.round(Math.random() * (max - min) + min));
//   }

//   return array;
// }
// var arrayNumbers = getRandNumbers(1, 10, 10);

// console.log(arrayNumbers);

// Bài 2: Cho trước mảng numbers, hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
// function getTotal(arr) {
//   var total = 0;

//   for (var i = 0; i < arr.length; i++) {
//     total = total + arr[i];
//   }
//   return total;
// }
// console.log(getTotal([1, 2, 3])); // Output: 6
// console.log(getTotal([4, 5, -3])); // Output: 6
// console.log(getTotal([4, 5, 3, 5])); // Output: 17

// Bài 3: Tính tổng giá trị đơn hàng
// Cho trước mảng orders là danh sách chứa các khóa học, các mặt hàng này được thể hiện dưới dạng object và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.
// Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.

// var orders = [
//   {
//     name: "Khóa học HTML - CSS Pro",
//     price: 3000000,
//   },
//   {
//     name: "Khóa học Javascript Pro",
//     price: 2500000,
//   },
//   {
//     name: "Khóa học React Pro",
//     price: 3200000,
//   },
// ];

// function getTotal(array) {
//   var totalOrder = 0;

//   for (var i = 0; i < array.length; i++) {
//     totalOrder = totalOrder + array[i].price;
//   }
//   console.log(totalOrder);

//   return totalOrder;
// }
// getTotal(orders);

// Bài 4: Bài tập sử dụng for...in
function run(object) {
  var arr = [];

  for (var key in object) {
    arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return arr;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]
