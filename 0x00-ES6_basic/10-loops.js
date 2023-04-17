export default function appendToEachArrayValue(array, appendString) {
    const thearray = [];
    for (const item of array) {
      thearray.push(appendString + item);
    }
  
    return thearray;
  }