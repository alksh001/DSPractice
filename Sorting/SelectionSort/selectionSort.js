// T = O(n*2) =======> nested loops
// S = O(1)

const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++){
        let smallest = i;
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[smallest]) smallest = j;
        }
        if (i !== smallest) {
            // swap i and smallest
            let temp = array[i];
            array[i] = array[smallest];
            array[smallest] = temp;
        }
    }
    return array;
}

console.log(selectionSort([3,5,4,6,2,2]));