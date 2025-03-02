/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  // Code here
  const values = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100,
  };
  let result = 0;


  for (let i = 0; i < ornaments.length; i++) {
    if (values[ornaments[i]] === undefined) {
      result = undefined;
      return result;
    }
    if (values[ornaments[i+1]] > values[ornaments[i]]) {
      result = result - values[ornaments[i]];
    } else {
      result += values[ornaments[i]];
    }
  }

  return result
}
