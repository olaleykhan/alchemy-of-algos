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
      separatedDigits.push(s);
    }
  }

  console.log(nums, "gives us", separatedDigits);
}




separateDigits([13, 25, 83, 77])
separateDigits([7, 1, 3, 9])
separateDigits([10921])