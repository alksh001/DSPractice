// ************* METHOD 1= BRUTE FORCE METHOD *********************
// Time = O(n^2)   i,j separate loops
//  Space = O(1)

const nonRepeatingChar = (str) => {
    let repeat;
    for (let i = 0; i < str.length; i++){
        repeat = false;
        for (j = 0; j < str.length; j++){
            if (str[i] === str[j] && i!==j) {
                repeat = true;
            }
        }
        if (repeat === false){ return i};
    }
    return null;
}

// console.log(nonRepeatingChar("a123412a"));



// ************* METHOD 2 = Using Hash Table *******************
//  Time = O(n), 
//  S = O(26 + 26 + 10) = O(62) => O(1)

const nonRepeatingChar2 = (str) => {
    let ht = {};
    for (let i = 0; i < str.length; i++){
        if (str[i] in ht) {
            ht[str[i]]++;
        } else
        {
            ht[str[i]] = 1;
        }
       
    }
    for (let i = 0; i < str.length; i++){
        if (ht[str[i]] === 1) return i;
    }
    return null;
}

console.log(nonRepeatingChar2("aabbC"));
