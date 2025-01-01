const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strN = n.toString();
  let max = -1;
  for (let i = 0; i < strN.length; i++) {
    let newStrN = strN.slice(0, i) + strN.slice(i + 1);
    max = Math.max(max, parseInt(newStrN));
  }
  return max;
}

module.exports = {
  deleteDigit
};
