// ************* Big O Analysis Method **************
// T = O(n) because i has one iteration
// S = O(1) string has fixed size;

const checkIsomorphic = (s, t) => {
    if (s.length !== t.length) return false;

    const sHash = {};
    const tHash = {}

    for (let i = 0; i < s.length; i++){
        const charS = s[i];
        const charT = t[i];
        if (!sHash[charS]) sHash[charS] = charT;
        if (!tHash[charT]) tHash[charT] = charS;

        if (sHash[charS] !== charT || tHash[charT] !== charS) return false;
    }
    return true;
}

console.log(checkIsomorphic("aaca", "bbdr"))