// *********** 1- BRUTE FORCE METHOD **********************

// Time complexity = O(n^2)  as i,j loops makes two iterations 
// Space complexity = O(1) as it is running in constant space.

let twoSumBruteForce = (array, target) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            sum = array[i] + array[j];
           
            if (sum == target) {
                return [i,j]
            }
        }
    }
    return [];
}

// **************** 2- BIG O Analysis Method *************
//  Time Complexity = O(n) as i has n time iteration
// S = O(n) as Hashtable has n insertions;

let twoSum = (array, target) => {
    let hashTable = {}
    let neededValue = 0;
    for (let i = 0; i < array.length; i++){
        neededValue = target - array[i];            //nv = 0 -5 -1 1 -2
        if (neededValue in hashTable) {            //ht  = {2 : 0, 7: 1, 3: 2, -1: 3,   }
            return [i, hashTable[neededValue]];
        } else {
            hashTable[array[i]] = i;
        }
    }
    return []
}

console.log(twoSumBruteForce([2,7,3,-1,4], 2));