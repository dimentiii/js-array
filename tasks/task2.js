function getTopScoringStudents(students) {
  return students
    .filter((student) => student.score > 80)
    .map((student) => student.name);
}

function getAverageAge(students) {
  if (students.length === 0) {
    return 0;
  }

  let sum = 0;
  for (const student of students) {
    sum += student.age;
  }
  return sum / students.length;
}

function addStudent(students, student) {
  students.push(student);
  return students;
}

function removeStudentByName(students, name) {
  return students.filter((student) => student.name !== name);
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };