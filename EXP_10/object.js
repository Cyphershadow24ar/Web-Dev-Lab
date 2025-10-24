// 1. Object Literal
let obj1 = { name: "Aniket" };

// 2. new Object()
let obj2 = new Object();
obj2.name = "Aniket";

// 3. Constructor Function
function Student(name) { this.name = name; }
let obj3 = new Student("Aniket");

// 4. Class
class StudentClass { constructor(name) { this.name = name; } }
let obj4 = new StudentClass("Aniket");

// 5. Object.create()
let proto = { greet() { console.log("Hello!"); } };
let obj5 = Object.create(proto);
obj5.name = "Aniket";

// 6. Factory Function
function createStudent(name) { return { name }; }
let obj6 = createStudent("Aniket");

// 7. JSON
let obj7 = JSON.parse('{"name": "Aniket"}');
