/**
 * here, we will demonstrate and try to understand recursion with a factorial function. 
 * this function finds the factorial of any number passed into it,. 
 * 
 */


/**
 * 
 * @param {*} num number
 * @returns number
 * 
 */

function factorial(num) {
  // here num := 4.
  // our stoping conditon is factorial(0) . and we must knw what factorial of 0 is. which is 1
  // so, our stiopping condition checks if the factorial we are looking foris factorial of 1

  if (num === 0) {
    return 1;
  } else {
    return factorial(num - 1) * num;
  }

}

console.log(factorial(3));
console.log(factorial(17));
console.log(factorial(170));
console.log(factorial(5));