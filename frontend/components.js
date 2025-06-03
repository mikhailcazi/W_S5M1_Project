function checkForAward(studentList = [], markThreshold = 82) {
  const answer = studentList.some((student) => {
    return student.marks > markThreshold;
  });

  const myStudentMarks = studentList
    .map((student) => student.marks)
    .sort((a, b) => b - a)[0];
  console.log(myStudentMarks);

  const failedStudents = studentList.filter((student) => student.marks < 50);
  console.log(failedStudents);

  return answer;
}

const studentList = [
  { name: "Phineas", marks: 89 },
  { name: "Ferb", marks: 72 },
  { name: "Candace", marks: 12 },
  { name: "Isabella", marks: 80 },
  { name: "Baljeet", marks: 55 },
];

console.log(checkForAward(studentList));

module.exports = { checkForAward };
