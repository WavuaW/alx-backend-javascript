export default function createIteratorObject(report) {
  const thearray = [];
  for (const item of Object.values(report.allEmployees)) {
    thearray.push(...item);
  }

  return thearray;
}
