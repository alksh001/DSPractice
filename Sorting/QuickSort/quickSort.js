// Recursively QS on lower sized subarray
// middle = pivot

let swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// 1,2,3,4,5
// 3,2,1,4,5

let partition = (array, start = 0, end = array.length - 1) => {
    let middle = Math.floor((start + end) / 2);
    swap(array, start, middle);

    let pivot = array[start];
    let i = start + 1;
    let j = end;

    while (i <= j) {
        while (array[i] <= pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i < j) {
            swap(array, i, j);
        }
    }
    swap(array, start, j);
    return j;
}


let quickSort = (array, start = 0, end = array.length - 1) => {
    while (start < end) {
        let pivotIndex = partition(array, start, end);

        // Recursively calling QS on lower sized subarray
        if (pivotIndex - start < end - pivotIndex) {
            quickSort(array, start, pivotIndex - 1);
            start = pivotIndex + 1;
        } else {
            quickSort(array, pivotIndex + 1, end);
            end = pivotIndex - 1;
        }
    }
}

// Recursive calling on both side sub arrays
const quickSort2 = (array, start = 0, end = array.length - 1) => {
    if (start < end) {
        let pivotIndex = partition(array, start, end);

        quickSort2(array, start, pivotIndex - 1);
        quickSort2(array, pivotIndex + 1, end);
    }
    return array
}

let array2 = [3, 2, 5, 1];
quickSort(array2)
console.log(array2);