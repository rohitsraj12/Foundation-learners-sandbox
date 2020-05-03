/*****************************
 *
 *  #functions
 * -    dry or dont repeat code so we use function
 *
 * */

function calculateAge(birthYear) {
  return 2018 - birthYear;
}
// using function in sunction and without return out put
function yearsLeftRetirement(bYear, firstName) {
  var age = calculateAge(bYear);
  var retirement = 60 - age;

  // using conditions inside function
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsLeftRetirement(1990, "Alisa");
yearsLeftRetirement(1980, "Shwe");
yearsLeftRetirement(1868, "Kiwa");
