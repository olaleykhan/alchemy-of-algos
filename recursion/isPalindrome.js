function isPalindrome(str) {

  // as always, we want to see if our str is a palindrom.
  // first , we hae t decide our breaking case. when do we stop calling ourselves ?
  if (str.length <= 1) {
    return true;
  }

  // then we do the first work, which is is last item eqaul to first ?
  // str[0] === str[str.length - 1], cool.  add that to the answer of checking if the substring is a palindrome, 
  // isPalindrome(str.substring(1, str.length - 1))
  // obviosuly, if the first conditional is false, we just return false altogether withouth having to get to the final base case.

  return str[0] === str[str.length - 1] && isPalindrome(str.substring(1, str.length - 1))
}


console.log(isPalindrome("madam"))


console.log(isPalindrome('palindrome'), 'palindrom')

console.log(isPalindrome("racecar"), "racecar")