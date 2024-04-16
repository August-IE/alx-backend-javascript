export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeInfo = newGrades.find((info) => info.studentId === student.id);
      const updatedStudent = { ...student };
      if (gradeInfo) {
        updatedStudent.grade = gradeInfo.grade;
      } else {
        updatedStudent.grade = 'N/A';
      }
      return updatedStudent;
    });
}
