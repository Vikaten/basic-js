const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {  
  const result = {};  
  
  // Обрабатываем каждый домен  
  for (let domain of domains) {  
    const parts = domain.split(".").reverse(); // Разбиваем на части и переворачиваем  
    let currentDomain = "";  
  
    // Формируем поддомены  
    for (const part of parts) {  
      currentDomain = '.' + part + currentDomain; // Формируем текущий поддомен 
      // Увеличиваем счетчик для текущего поддомена  
      result[currentDomain] = (result[currentDomain] || 0) + 1;  
    }  
  } 
   
  return result;  
} 

module.exports = {
  getDNSStats
};
