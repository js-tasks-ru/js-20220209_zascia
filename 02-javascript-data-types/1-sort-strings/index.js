/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
function wayOfCompare(a,b) {
  // !!! this one setting had been taken from the teacher's repository after multiple tryings to solve it by myself
  //  ['ru', 'en'], {caseFirst: 'upper'}
  return a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'});
}

export function sortStrings(arr, param = 'asc') {
  let clonnedArray = arr.slice();
  let sortedArray = clonnedArray.sort(wayOfCompare);


  if (param === 'asc') {
    return sortedArray;
  }

  return sortedArray.reverse()
}
