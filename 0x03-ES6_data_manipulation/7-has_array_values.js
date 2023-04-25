/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let results = true;
  list.map((x) => {
    if (!set.has(x)) {
      results = false;
    }
  });

  return results;
}
