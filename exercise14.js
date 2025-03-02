/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
  // Code here
  const reindeerOrdered = reindeer.sort((a,b) => a-b);
  const stablesOrdered = stables.sort((a,b) => a-b);
  let result = 0;

  for (let i = 0; i < reindeerOrdered.length; i++) {
    result += Math.abs(stablesOrdered[i] - reindeerOrdered[i])
  }
  return result
}
