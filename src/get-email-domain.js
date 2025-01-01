const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split("");
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("@")) {
      index = i;
    }
  }
  return arr.splice(index + 1, arr.length).join("");
}

module.exports = {
  getEmailDomain
};
