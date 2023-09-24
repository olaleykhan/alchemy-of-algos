/**
 * sum of natural numbers. 
 * this is another typical case where recusion can be imlemeted. fine, a loop is more intuitive here, but you see, 
 * if we truly understand recursion, using recursion also becomes intuitive and even cleaner and easier to read.
 * it is more intuitive because if you write down the formular that solves the problem, it looks like a recursion to you. 
 * HAHAHAHA!!!!
 */


/**
 * what do I mean? 
 * summation n = n + (n-1) + (n-2) + ..... 2 + 1+ 0;
 * 
 * you will find here that simply writing out a mathematical formular that solves our problem makes us easily see how
 * the problem can be solved recursively. 
 */


function sumNatural(num) {

  if (num <= 0) {
    return 0
  }

  return num + sumNatural(num - 1)
}


console.log(sumNatural(10));
console.log(sumNatural(55), " is the sum of all nat no to 55");
