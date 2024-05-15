// n => MAx length of string and , s => max number of chars in string
// Time = O(s * nlogn)
// Space = O(s * n)  => create sorted array(s*n), output of array(s*n), create hash table (s*n) 

let groupAnagrams = (strings) => {
    let sortedString = strings.map((x) => x.split('').sort().join('')); //key

    //ht ---> key => sortedString array and values => string array
    let ht = {};
    for (let i = 0; i < strings.length; i++){
        if (!ht[sortedString[i]]) ht[sortedString[i]] = [strings[i]];
        else ht[sortedString[i]].push(strings[i]);
    }
    let result = Object.values(ht);
    return result
}
let s =["atc", "act", "arc", "car", "cat", "abc"]
console.log("RES",groupAnagrams(s));