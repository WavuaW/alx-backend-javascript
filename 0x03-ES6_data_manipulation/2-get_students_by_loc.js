export default function getStudentsByLocation(arrayOne, city) {
    return arrayOne.filter( myFilter => myFilter.location === city);
}