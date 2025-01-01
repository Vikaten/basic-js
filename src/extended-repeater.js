const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let finalRes = "";
  const repeatTimes = options["repeatTimes"] || 1;
  const separator = options["separator"] || "+";
  const addition = options.addition !== undefined ? String(options["addition"]) : "";
  const additionRepeatTimes = options["additionRepeatTimes"] || 1;
  const additionSeparator = options["additionSeparator"] || "|";
  let additionStr = "";
  for (let i = 0; i < additionRepeatTimes; i++) {
    additionStr += addition;
    if (i < additionRepeatTimes - 1)
      additionStr += additionSeparator;
  }
  for (let i = 0; i < repeatTimes; i++) {
    finalRes += str + additionStr;
    if (i < repeatTimes - 1)
      finalRes += separator;
  }
  return finalRes;
}

module.exports = {
  repeater
};
