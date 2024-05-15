// Time = O(n * log n)
// S = O(n)

const mergeSortedArrays = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let mergedArray = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++
    }
    return mergedArray;
}

let mergeSort = (array) =>{
    if (array.length <= 1) return array;
    let middle = Math.floor(array.length / 2);
    let leftSide = mergeSort(array.slice(0, middle));
    let rightSide = mergeSort(array.slice(middle));

    return mergeSortedArrays(leftSide, rightSide);
}

console.log(mergeSort([5,7,2,6,1,-1,-7,5]));