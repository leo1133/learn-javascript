const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Bài 1: Viết hàm JavaScript kiểm tra xem biến input truyền vào có phải là mảng hay không.
function checkArr(arr) {
  var result = Array.isArray(arr);
  return result;
}
const arr = [1, 2];
// console.log(checkArr(arr));

// Bài 2: Viết hàm JavaScript để sao chép một mảng cho trước.
function oldArray(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element);
  }
  return newArr;
}
oldArray([1, 2, 3]);

// Bài 3: Tạo mảng mới lấy từ phần tử đầu tiên đến phần tử thứ n (n = 4)
let newArr = [];
for (let index = 0; index < array.length; index++) {
  if (index === 4) {
    break;
  }
  const element = array[index];
  newArr.push(element);
}
console.log("newArr", newArr);

// Bài 4:
let newArr1 = [];
for (let index = array.length - 1; index > -1; index--) {
  if (index === array.length - 5) {
    break;
  }
  const element = array[index];
  newArr1.push(element);
}
console.log("newArr1", newArr1);

// Bài 5: biến tất cả các phần tử trong mảng thành một chuỗi văn bản.
let newArr2 = [];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  newArr2.push(element.toString());
}

console.log("newArr2", newArr2);

// Bài 6: Viết chương trình nối tất cả các phần tử trong mảng thành một chuỗi văn bản.
let newString = "";

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  newString = newString + element;
  if (index !== array.length - 1) {
    newString = newString + ",";
  }
}
console.log("newString", newString);

// Bài 7: Viết chương trình nhận vào một chuỗi số và chèn dấu gạch ngang (-) vào giữa hai số chẵn đứng cạnh nhau. Ví dụ: Nhập 025468 -> Đầu ra: 0-254-6-8
let newStr = "";
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  newStr = newStr + element;
  if (element % 2 === 0 && index !== array.length - 1) {
    newStr = newStr + "-";
  }
}
console.log("newStr", newStr);

// Bài 8: Viết chương trình chuyển chữ hoa thành chữ thường và ngược lại cho từng ký tự trong chuỗi. Ví dụ: "Hello World" -> "hELLO wORLD"
const string = "Hello World";
let changeCase = "";
for (let index = 0; index < string.length; index++) {
  const element = string[index];
  if (element === element.toUpperCase()) {
    changeCase = changeCase + element.toLowerCase();
  } else {
    changeCase = changeCase + element.toUpperCase();
  }
}
console.log("changeCase", changeCase);
