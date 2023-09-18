/*
  Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.

To separate the digits of an integer is to get all the digits it has in the same order.

For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].
*/


//  approach 1 converting to strings
function separateDigits(nums) {
  const separatedDigits = [];

  for (const num of nums) {

    for (const s of num.toString()) {
      separatedDigits.push(Number(s));
    }
  }

  console.log(nums, "gives us", separatedDigits);
}




// separateDigits([13, 25, 83, 77])
// separateDigits([7, 1, 3, 9])
// separateDigits([10921])


// approach 2. get numerically using modulus.
function separateDigits1(nums) {
  let answer = [];

  for (let n of nums) {
    let temp = [];
    // get the last digit at the end of the number
    while (n > 0) {
      temp.unshift(n % 10);
      n = Math.floor(n / 10);
    }
    // append new array to current answer array
    answer = answer.concat(temp)
  }

  console.log(answer);
}



// separateDigits1([13, 25, 83, 77])
// separateDigits1([7, 1, 3, 9])
// separateDigits1([10921])


// APPROACH 3. I just discovered flat map and it'll certainly make the code more readable

function separateDigits2(nums) {

  console.log(nums.flatMap(getDigits))

}

function getDigits(num) {
  const temp = [];

  while (num > 0) {
    temp.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return temp;
}

// separateDigits2([13, 25, 83, 77])
separateDigits([7, 1, 3, 9, 100])
separateDigits1([7, 1, 3, 9, 100])
separateDigits2([7, 1, 3, 9, 100])
separateDigits([32, 43, 68, 8, 100, 84, 80, 14, 88, 42, 53, 98, 69, 64, 40, 60, 23, 99])
separateDigits1([32, 43, 68, 8, 100, 84, 80, 14, 88, 42, 53, 98, 69, 64, 40, 60, 23, 99])
separateDigits2([32, 43, 68, 8, 100, 84, 80, 14, 88, 42, 53, 98, 69, 64, 40, 60, 23, 99])
// separateDigits2([10921])


