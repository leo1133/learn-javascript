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
