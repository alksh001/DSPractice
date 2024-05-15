// T = O(d x (n+k));  n = 0 to 9 , d = max no of digits
// S = O(n+k)


const radixSort = (array) => {
    if (array.length === 0) return "Empty Array";
    const greatestNumber = Math.max(...array);
    //find number of digits in the greatest number
    const numberOfDigits = Math.floor(Math.log10(greatestNumber)) + 1;
//number of times counting sort needs to be done = digits in greatest number
    for (let i = 0; i < numberOfDigits; i++){
        countingSort(array, i);
    }
    return array;
}


const countingSort = (array, place) => {
    const output = new Array(array.length).fill(0);
    const temp = new Array(10).fill(0);
    const digitPlace = Math.pow(10, place);

    for (let num of array) {
        let digit = Math.floor((num / digitPlace)) % 10;
        temp[digit]++;
    }

    for (let i = 1 ; i < 10; i++){
        temp[i] = temp[i] + temp[i - 1];

    }

    for (let j = array.length - 1; j >= 0; j--){
        const currDigit = Math.floor((array[j] / digitPlace)) % 10;
        temp[currDigit]--;

        const insertPosition = temp[currDigit];
        output[insertPosition] = array[j];
    }

    for (let i = 0; i < output.length; i++){
        array[i] = output[i];
    }
}


let array = [25,1,72,73,145,23,110]
// let array = [384,73,374,183,65,247,185,153]
console.log(radixSort(array));

