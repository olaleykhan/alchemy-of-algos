function removeDuplicates(s) {
  // first get an object that maps each unique alphabet to the number 
  // of times it appears in the string. call it frequency. we will perhanps understand its purpose later
  // but we are not new to he idea of tracking frequency. if you are, leemau.
  const freq = getFreq(s);
  const stack = [];
  const seen = {}; //{[key:string]: boolean}

  // loop through the string s
  for (const char of s) {
    // reduce the frequency of char depecting that we have moved accross it
    freq[char]--;

    // next is the tricky bit. we have a 
    // decision to make, this next item, should we make a decision over it or simply walk over it ?
    // how do we decide ?
    // well if we have seen it before, we should most cetainly walk over it, so, we simply 
    //  check if it exists in our seen stack, if it does, great. walk over it,
    if (seen[char]) continue;
    // if it does not, now we need to decide what to do with it
    /**
     * now, lets decide what do do with it. 
     * the idea is to try to pop characters from the stack that will ruin our sequence.
     * and what is our sequence ? it is one that is in the smallest lexicographical order. 
     * AKA, arranged as words are arranged in a dictionary, don't mind the lexicographical grammar.
     * but how do we do that? thankfully in javascript, 
     * that is easy simply check if char1 > char2
     * a>b = true
     * a> h = true  // true because a comes before h in the alphabets
     * b > a = false. //false because wall, b comes before a
     * 
     * so, once the next character is less than the last item in stack, remove hin papa.
     * but then, we have to check this continously until the stack is empty, you gorrit, 
     * a while loop will be situable for that with a condiotion to check if there is 
     * still items in the stack. 
     * so, while (stack.length) right ?
     * but then, remember our conditional about checking if the current 
     * character will ruin our sequence? that is why we are looping through
     * with a while to start with anyway. so, let's throw that in.
     * 
     *  how do we get the last item in the stack ? stack[stack.length-1];
     * while(stack.length && stack[stack.length-1] > char )
     * 
     * okay, you caught me, I have been leaving one more condition out, if you reasoned 
     * that about then you might as well stop reading
     * you see, we need to check to see if we will still be able to see this 
     * character in the future before we pop it
     * while our lexicographical requirement is important, it is not as important
     *  as ensuring we have all posible strings so, why will we want to remove a character 
     * that we will not see again in the future ? right. so, we have to ensure that 
     * we only pop the element if and only if it satisfies all 3 conditions
     * condition 1: do we still have elements left in the stack to pop?
     * condition2: will the last character in the stack NOT ruin our streak? is it smaller than the current character lexicographically?
     * condition3: are we still going to see this character we want to pop in the future? A.K.A, is the value in the frequency table greater than zero ? 
     * so, let's throw in condition 3
     * while((stack.length) && (stack[stack.length-1] > char) && freq[stack[stack.length-1] ]>0 )
     * now, what do we want to do when we satisfy these conditions?
     * well, simple,
     * 1. pop the element from the stac obviously. is that not why we are going 
     * through this stressful while loop and conditionals?
     * 
     * but then there is something else, 
     * you see, if we are popping this character from the stack,
     * we have to face the facts, we have unseen it
     * it's no longer in the stack. maybe stackHas is a more intuitive name actually. stackHas[char] is better than seen[char]. that is by the way sha
     * so,
     * 2. we have to reflect that by changing its value in the seen map back to false.
     * 
     * let's put that in code.
     */
    // while()
    while (stack.length && (char < stack[stack.length - 1]) && freq[stack[stack.length - 1]] > 0) {
      popedChar = stack.pop();
      seen[popedChar] = false;
    }

    // then we continue to do the needful by pushing our new destiny 
    // child into the stack and indicatin that we have seen it before
    stack.push(char);
    seen[char] = true;
  }
  console.log(stack.join(""));
  return stack.join("");
}

function getFreq(s) {
  const map = {};
  for (const char of s) {
    map[char] = (map[char] ?? 0) + 1;
  }
  // console.log(map)
  return map;


}


removeDuplicates("bcabc")
removeDuplicates("cbacdcbc")


