let ssArray = (array) => {
    const newArray = new Array(array.length).fill(0);

    let pleft = 0;
    let pRight = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--){
        const lSquared = Math.pow(array[pleft], 2);
        const rSquared = Math.pow(array[pRight], 2);
        console.log(`ls = ${lSquared} and rs = ${rSquared}`);

        if (lSquared > rSquared) {
            newArray[i] = lSquared;
            pleft++;
        } else {
            newArray[i] = rSquared;
            pRight--;
        }
    }
    return newArray;
}

console.log(ssArray([1, 3, 4]));
console.log(ssArray([-5,-2,1, 3, 4]));
console.log(ssArray([]));