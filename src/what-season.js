const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) {
      throw new Error("Invalid date!");
    }

  if (date instanceof Date) {
    if (date.getMonth() < 5 && date.getMonth() > 1 ) {return 'spring'}
    if (date.getMonth() < 8 && date.getMonth() > 4 ) {return 'summer'}
    if (date.getMonth() < 11 && date.getMonth() > 7 ) {return 'autumn'}
   else {
      return 'winter'
    }
  }
else {throw new Error('Invalid date!')}
}

module.exports = {
  getSeason
};
