function validPalindrome(s) {
    let p1 = 0;
    let p2 = s.length - 1;

    while (p2 >= p1) {
        if (s[p1] !== s[p2]) {
            return isPalindrome(s.slice(p1 + 1, p2 + 1)) || isPalindrome(s.slice(p1, p2))
        }
        p1++;
        p2--;
    }

    return true

};

function isPalindrome(s) {
    return s === reverse(s);
}

function reverse(s) {
    return [...s].reverse().join("")
}