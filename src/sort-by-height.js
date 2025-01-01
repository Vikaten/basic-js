const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let index = 0;
  let res = [];
  const sortedHeights = arr
    .filter((x) => x !== -1)
    .sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === -1) {
    res.push(-1); // Если элемент -1, добавляем его в результат
  } else {
    res.push(sortedHeights[index++]); // Иначе добавляем элемент из sortedHeights
  }
}

  return res;
}

module.exports = {
  sortByHeight
};
