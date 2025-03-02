/**
 * @param {string} filename - The filename to decode.
 * @returns {string} The decoded filename.
 */
function decodeFilename(filename) {
  // Code here
  const regexp = /[0-9]/g;
  const regexpLetters = /[a-z]/gi;
  let array = filename.split("");

  let i = 0; 
  while (array[i] !== "_") {
    array.shift();
    i = 0;
  }

  let j = array.length - 1;
  while (array[j] !== ".") {
    array.pop();
    j = array.length - 1;
  }

  array.shift();
  array.pop();
  return array.join("")
}
