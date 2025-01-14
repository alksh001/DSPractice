// T = O(log n)
// S = O(1)

const searchRangeIterative = (array, target) => {
    const leftExtreme = findLeftExtreme(array, target);
    const rightExtreme = findRightExtreme(array, target);

    return [leftExtreme, rightExtreme];
}

const findLeftExtreme = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor((left+ right) / 2);
        if (target === array[middle]) {
            if (middle === 0) return 0;
            if (array[middle - 1] === target) right = middle - 1;
            else return middle;
        } else if (target < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

const findRightExtreme = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2);

        if (target === array[middle]) {
            if (middle === array.length - 1) return middle;
            if (array[middle + 1] === target) left = middle + 1;
            else return middle;
        } else if (target < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
}

console.log(searchRangeIterative([1,1,2,2,2,3,4,5],0));