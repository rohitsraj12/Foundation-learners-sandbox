/***************************
 *
 *  function statement and function expression
 *
 * */

// function declaration
//function whatDoYouDo(job, firstName) {}

//  function expressions
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "developer":
      // when we use return, it will stop and immidiatly go out of the function and return it.
      // it will  not only return the function, it also stop the function so no need break in switch case here
      return firstName + " is a developer.";

    case "designer":
      return firstName + " is a designer.";

    case "tester":
      return firstName + " is a tester.";

    default:
      return firstName + " is doing something else.";
  }
};

console.log(whatDoYouDo("designer", "Alisa"));
console.log(whatDoYouDo("developer", "Shwe"));
console.log(whatDoYouDo("retired", "Kiwa"));
