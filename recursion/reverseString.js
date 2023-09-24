/**
 * bienvenue tout le monde a mon reverse string function illustrating recurssions.
 * we will be reversig a string here using recursion
 */
// alafguy -> yugfala
function reverseString(str) {
  // what is our breaking condition? well that be if we have no more strings to return.  
  // hence, when string is now empty.
  if (str === "") return ""
  // what is our little work we have to do?
  // while it seems like simply getting to the end of the list and returning the last number,
  // that is actualy not enough . we have to attach something with the result of getting the last recursion
  // so, here, we do not just return the result of caling reverse string on the new string, wa attach it to the current item at the back. 
  // that really is where the work is. albf -> fbla
  // so, we have reverse('albf) -> f+ reverse('alb') -> b + reverse('al) [b+la] -> l + reverse('a') ->  a+ reverse("")
  // this is still a tad confusing.....
  // .... because why will b + reverse('al) give me bla , but in actual code, it's written reverse('al') + b right?
  // well, that might have something to do with stacks. last in first out, we will probably understand that better later
  // oh!!! I see the issue now. I am actually picking the first item. not the last;
  // it is supposed to be 
  // reverse('albf') -> reverse('lbf') + a -> reverse('bf') + l -> reverse(f)+ b -> reverse('')+ f -> 
  //         fbla               fbl+ a                fb+l               f+b           '' + f
  return reverseString(str.substr(1)) + str[0];
}

console.log(reverseString("madam"));