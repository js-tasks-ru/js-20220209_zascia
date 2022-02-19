/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (string === '' || size === 0) return '';
  if (size === undefined) return string;
  let prevSymbol = '';
  let currentHash = [];
  let newArray = [...string].filter((elem) => {
    if (elem !== prevSymbol) {
      currentHash.length = 0;
      currentHash[elem] = 1;
      prevSymbol = elem;
      return true;
    }
    if (currentHash[elem] && currentHash[elem]++ < size) {
      return true;
    } else {
      return false;
    }

  });
  return newArray.join('');
}
