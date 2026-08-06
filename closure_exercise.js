function createCounter() {
  var age = 0; // Biến age nằm trong closure scope, được ghi nhớ

  return function (action) {
    return action === "next" ? ++age : --age;
  };
}

// Khởi tạo closure (chỉ tạo 1 lần để giữ trạng thái của age)
const clickButton = createCounter();

console.log(clickButton("next")); // Output: 1
console.log(clickButton("next")); // Output: 2
console.log(clickButton("prev")); // Output: 1
