export default function getStudentIdsSum(arrayOne) {
  return arrayOne.reduce((newNum, compiler) => newNum + compiler.id, 0);
}
