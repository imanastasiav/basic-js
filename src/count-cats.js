const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats = [
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  let ears = [];
  if (matrix.length === 0) {
    return 0;
  }
  let numberofColumns = matrix[0].length
  for (let i = 0; i < numberofColumns; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === '^^') {
        ears.push(i);
      }
    }
  }

  let earsCount = ears.length;
  return earsCount;
}

module.exports = {
  countCats
}
