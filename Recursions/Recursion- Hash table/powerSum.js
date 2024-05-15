const powerSum = (array, power = 1) => {
    let sum = 0;

    for (const element of array) {
        if (Array.isArray(element)) {
            sum += powerSum(element, power + 1);
            console.log(`recursion = ${sum}`);
        } else {
            sum += element;
            console.log(`Sum = ${sum}`);
        }
    }
    return Math.pow(sum, power);
}

// let array = [1, 2, [3, 4], [[2]]];
let array = [1, 2, [4]];
console.log(powerSum(array));