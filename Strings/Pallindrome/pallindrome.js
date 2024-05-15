// ************* Method 1 - By Creating a new string **********
// Time = O(n^2) as creating and copying a new string requires n operations
// Space = O(n)

const isPallindrome = (string) => {
    let newStr = "";
    for (let i = string.length - 1; i >= 0; i--){
        newStr = newStr+string[i];
    }
    if (string === newStr) return true;
    else return false;
}

// console.log(isPallindrome("mM"));

// ************* Method 2 - By pushing to an array from end of string **********
// Time = O(n) as pushing to an array is a constant time operation
// Space = O(n) creating a new string

const isPallindrome2 = (str) => {
    const newStr = [];
    for (let i = str.length - 1; i >= 0; i--){
        newStr.push(str[i]);

    }
    let r = newStr.join("");
    if (str === r) return true;
    else return false;
}

// console.log(isPallindrome2("abcba"));


// ************* Method 3 - By using 2 pointers at start and end ************
//  T = O(n)
//  S = O(1) 

const pallindrome = (str) => {
    let start = 0;
    let end = str.length-1;
    for (let i = 0; i < str.length; i++){
        if (str[start] === str[end]) {
            console.log("i = ",i);
            start++;
            end--;
        }else{
            return false;
        }
    }
    return true;
}

console.log(pallindrome("abcba"));