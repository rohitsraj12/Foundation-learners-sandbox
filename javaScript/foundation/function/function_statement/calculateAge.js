/*****************************
 *
 *  #functions
 * -    dry or dont repeat code so we use function
 *
 * */

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var alisa = calculateAge(1990);
var shwe = calculateAge(1980);
var kiwa = calculateAge(1958);

console.log(alisa, shwe, kiwa);
