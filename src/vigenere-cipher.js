const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(mes, key) {
    let openmes = key
      .repeat(Math.ceil(mes.length / key.length))
      .slice(0, mes.length);
    let res = "";
    for (let i = 0; i < mes.length; i++) {
      let openmesCode = openmes.charCodeAt(i);
      let mesCode = mes.charCodeAt(i);
      console.log(openmesCode);
      console.log(mesCode);
      console.log("");

      let char = String.fromCharCode(openmesCode + mesCode);
      res += char;
    }

    return res;
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
