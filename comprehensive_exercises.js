// Bài 1:
function hello() {
  return "hello edabit.com";
}

console.log(hello());

// Bài 2: Hãy tạo một hàm nhận vào một mảng chỉ chứa các số và trả về phần tử đầu tiên.
function getFirstValue(arr) {
  return arr[0];
}
console.log(getFirstValue([1, 2, 3]));

// Bài 3: Hãy tạo một hàm nhận vào tuổi (tính bằng năm) và trả về tuổi (tính bằng ngày).
function calcAge(age) {
  return age * 365;
}
console.log(calcAge(10));

// Bài 4: Hãy tạo một hàm nhận hai số làm đối số và trả về tổng của chúng.
function addition(a, b) {
  var sum = a + b;
  return sum;
}
console.log(addition(3, 6));

// Bài 5: Hãy tạo một hàm nhận vào hai tham số voltage và current trả về power đã tính toán.
function circuitPower(voltage, current) {
  var result = voltage * current;
  return result;
}
console.log(circuitPower(2, 100));

// Bài 6: Hãy viết một hàm nhận vào cạnh đáy và chiều cao của một tam giác để return tính diện tích của nó.
function triArea(base, height) {
  var result = (base * height) / 2;
  return result;
}
console.log(triArea(6, 6));

// Bài 7: Hãy tạo một hàm nhận một số làm đối số, tăng số đó lên +1 và trả về kết quả.
function addition(num) {
  var result = ++num;
  return result;
}
console.log(addition(4));

// Bài 8: Hãy tạo một hàm tìm phạm vi lớn nhất của cạnh thứ ba của một tam giác, trong đó độ dài các cạnh đều là số nguyên.
function nextEdge(side1, side2) {
  var result = side1 + side2 - 1;
  return result;
}
console.log(nextEdge(10, 20));

// Bài 9: Trong JavaScript chỉ có một toán tử duy nhất có khả năng trả về phần dư của phép chia. Hai số được truyền vào làm tham số. Số thứ nhất chia cho số thứ hai sẽ có phần dư, có thể bằng không. Trả về giá trị đó.
function remainder(x, y) {
  var result = x % y;
  return result;
}
console.log(remainder(17, 9));
