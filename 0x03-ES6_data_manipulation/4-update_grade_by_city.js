export default function updateStudentGradeByCity(newArray, city, newGrade) {
  return newArray
    .filter((OurObj) => OurObj.location === city)
    .map((student) => {
      newGrade.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }
        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });
      return student;
    });
}
