// Time = O(n x n) => n*2
// Space = O(1)

let bubbleSort = (array) => {
    let sorted = false;
    let counter = 0;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++){
            if (array[i] > array[i + 1]) {
                swap(array, i);
                sorted = false;
            }
        }
        counter++;
    }
    return array;
}

let swap = (array, i) => {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
}


console.log(bubbleSort([1,-1,-4,9,6,2,4,8,7]));