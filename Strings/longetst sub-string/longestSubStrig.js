// Time = O(n)
// Space = O(n*m) => m = #uniqcharacters in hash table

const longestSubString = (string) => {
    // "abcdafbdxyz"
    let start = 0, max = 0;
    let ht = {};
    
    for (let i = 0; i < string.length; i++){
        const char = string[i];
        if (char in ht) {
            start = Math.max(start, ht[char] + 1);
        } 
        max = Math.max(max, i - start + 1);
        ht[char] = i;
        
    }
    return max;
}

let s = "abcdbe";

console.log(longestSubString(s));