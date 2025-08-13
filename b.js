

const students = [
{ id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
{ id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
{ id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
{ id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
{ id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
{ id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
{ id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
{ id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
{ id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
{ id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
];

//MAP questions
//1)
let onlyNames = students.map(students => students.name);
console.log(onlyNames);

//2)
const nameCourse = students.map(student => ({name:student.name, course:student.course}));
console.log(nameCourse);

//3)
const Withstatus = students.map(student => ({
  name: student.name,
  status: student.marks >= 60 ? "pass" : "fail"
}));
console.log(Withstatus);

//4)
const nameCourseString = students.map(function(student) {
  return   student.name + " - " + student.course  ;
});
console.log(nameCourseString);

//5)
const updatedMarks = students.map(function(student) {
  student.marks = student.marks + 5;
  return student;
});
console.log(updatedMarks);



//FILTER questions
//1)
const CSstudents = students.filter(function(student) {
  return student.course === "Computer Science";
});
console.log(CSstudents);

//2)
const above80 = students.filter(function(student) {
  return student.marks > 80;
});
console.log(above80);

//3)
const notPaid = students.filter(function(student) {
  return student.feesPaid === false;
});
console.log(notPaid);

//4)
const ageAndMarks = students.filter(function(student) {
  return student.age > 20 && student.marks > 70;
});
console.log(ageAndMarks);

//5)
const mechBelow85 = students.filter(function(student) {
  return student.course === "Mechanical" && student.marks < 85;
});
console.log(mechBelow85);


REDUCE questions
//1)
const total=students.reduce((sum,students)=>sum+students.marks,0);
console.log("total marks",total);

//2)
const avg=students.reduce((sum,students)=>sum+students.marks,0)/students.length;
console.log("Avg mark:",avg)

//3)
var paidCount = students.reduce(function(count, student) {
  if(student.feesPaid) {
    return count + 1;
  } else {
    return count;
  }
}, 0);
console.log("students who paid fees:", paidCount);

//4)
let highest =0
for(let i =0;i<students.length;i++){
    if(students[i].marks>highest){
        highest=students[i].marks;
    }
}
console.log(highest);

//5
let groupByCourse = {}
for(let i=0; i<students.length; i++){
    let c = students[i].course
    if(groupByCourse[c] == undefined){
        groupByCourse[c] = [students[i]]
    } else {
        groupByCourse[c].push(students[i])
    }
}
console.log(groupByCourse)