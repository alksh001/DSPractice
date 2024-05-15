// T = O(log n)
// S = O(log n)

const searchRangeRec = (array, target) => {
    let range = [-1, -1];
    findLeftExtreme(array, target, range);
    findRightExtreme(array, target, range);
    return range;
}

const findLeftExtreme = (array, target, range, left = 0, right = array.length - 1) => {
    // base case
    if (left > right) return;

    const middle = Math.floor((left + right) / 2);
    if (array[middle] === target) {
        if (middle === 0) range[0] = 0;
        else if (array[middle - 1] === target) {
            findLeftExtreme(array, target,range, left, middle - 1)
        } else range[0] = middle;
    } else if(target<array[middle]) {
        findLeftExtreme(array, target,range, left,  middle-1)
    }else findLeftExtreme(array,target,range, middle+1, right)
}

const findRightExtreme = (array, target, range, left = 0, right = array.length - 1) => {
    if (left > right) return;

    const middle = Math.floor((left + right) / 2);
    if (array[middle] === target) {
        if (middle === array.length - 1) range[1] = middle;
        else if (target === array[middle + 1]) {
            findRightExtreme(array, target, range, middle + 1, right);
        }else range[1] = middle
    } else if (target < array[middle]) {
        findRightExtreme(array,target,range,left,  middle-1)
    } else {
        findRightExtreme(array, target, range,  middle + 1, right);
    }
}

console.log(searchRangeRec([],3));