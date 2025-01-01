const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const res = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] === "--double-next") {
      if (i + 1 < length) {
        res.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (i > 0 && arr[i - 1] !== "--discard-next") {
        res.push(res[res.length - 1]); // Удваиваем последний добавленный элемент
      }
    } else if (arr[i] === "--discard-next") {
      if (i + 1 < length) {
        i++; // Пропускаем следующий элемент
      }
    } else if (arr[i] === "--discard-prev") {
      if (res.length > 0 && arr[i - 1] !== "--discard-next") {
        res.pop(); // Удаляем последний добавленный элемент
      }
    } else {
      res.push(arr[i]); // Добавляем обычные элементы
    }
  }

  return res;
}


module.exports = {
  transform
};
