import getListStudents from './0-get_list_students';

export default function getListStudentIds(myArray = getListStudents) {
  if (!(Array.isArray(myArray))) {
    return [];
  }

  const result = myArray.map((element) => element.id);
  return result;
}
