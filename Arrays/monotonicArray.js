let monotone = (array) => {
    const first = array[0];
    const last = array.length - 1;

    if (first === last) {
        for (let i = 0; i < array.length - 1; i++){
            if (array[i + 1] !== array[1]) return false;
        }
    } else if (first < last) {
        // non decreasing
        for (let i = 0; i < array.length - 1; i++){
            if(array[i+1]<array[i]) return false
        }
    } else {
        for (let i = 0; i < array.length - 1; i++){
            if(array[i+1]>array[i]) return false
        }
    }
    return true;
}

console.log(monotone([1,2,3,4]));
console.log(monotone([1,1,1,1,1]));
console.log(monotone([1,1,1,1,0]));
console.log(monotone([]));