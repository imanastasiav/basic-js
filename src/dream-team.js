const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
if (typeof members === 'object' && members !== null) {
  let nameOfTeam = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      for (let j = 0; j < members[i].length; j++) {
        if (typeof members[i] === 'string' && members[i][j] !== ' ') {
          members[i].toUpperCase();
          nameOfTeam.push(members[i][j])
          break;
        }
      }
    }
  }
  let name = nameOfTeam.join('');
  team = name.toUpperCase();
  let teamName = team.split('').sort().join('');
  return teamName;
} else return false;
}

/*let members = [
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
];
createDreamTeam(members);*/

module.exports = {
  createDreamTeam
}
