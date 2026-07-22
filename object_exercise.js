// Tạo một object constructor Student gồm: firstName, lastName.
// Định nghĩa thêm phương thức là getFullName, phương thức này sẽ trả về tên đầy đủ của sinh viên.

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Student.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName} `;
};

// Ví dụ khi sử dụng
var student = new Student("Long", "Bui");
var student1 = new Student("Nga", "Phg");

console.log(student.firstName); // 'Long'
console.log(student.lastName); // 'Bui'
console.log(student.getFullName()); // 'Long Bui'
console.log(student1.getFullName());
console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(student1));
