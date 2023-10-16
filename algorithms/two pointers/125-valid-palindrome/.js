function isPalindrome(s) {
    const str = sanitizeStr(s.toLowerCase());

    let p1 = 0;
    let p2 = str.length - 1

    while (p2 >= p1) {
        if (str[p1] !== str[p2]) return false;
        p1++;
        p2--;
    }

    return true

};

function sanitizeStr(s) {
    return s.replace(/[^a-z0-9]/g, "");
}



