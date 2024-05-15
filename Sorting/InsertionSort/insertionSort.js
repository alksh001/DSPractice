// T = O(n*2) =======> nested loops
// S = O(1)

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++){
        let j = i - 1;
        let temp = array[i];

        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
}

console.log(insertionSort([3,5,4,6,2,1,-1,-7,2]));