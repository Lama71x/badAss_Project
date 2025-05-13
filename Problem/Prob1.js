// Suppose you have an array of objects representing students. Each object has properties like name, age, and grade. Write a JavaScript function that takes this array and returns an array containing the names of students who have a grade of 'A'.

const students = [
    {name:'Saroj', age:'18',Grade:'A'},
    {name:'Dinita',age:'10',Garde:'B'},
    {name:'Bulbul',age:'20',Grade:'C'},
];

function getTopStudents(studentArray) {
    return studentArray
      .filter(student => student.grade === 'A') // Filter students with grade 'A'
      .map(student => student.name);           // Extract only their names
  }

  const topStudents = getTopStudents(students);
  console.log(topStudents);