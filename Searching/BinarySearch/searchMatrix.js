// T = O(log m)+log(n) =====> O(log mn)
// S = O(1)

const searchMatrix = (matrix, target) => {
    let rows = matrix[0].length;
    let column = matrix.length;

    // binary search to identify row for existing element
    let top = 0;
    let bottom = rows - 1;
    let middle;

    while (top <= bottom) {
        middle = Math.floor((top + bottom) / 2);
        if (target < matrix[middle][0]) bottom = middle - 1;
        else if (target > matrix[middle][column - 1]) top = middle + 1;
        else break;
    }

    if (top > bottom) return false;
    let left = 0;
    let right = column - 1;
    let midValue;

    while (left <= right) {
        midValue = Math.floor((left + right) / 2);
        if (target === matrix[middle][midValue]) return true;
        if (target < matrix[middle][midValue]) right = midValue - 1;
        else left = midValue + 1;
    }
    return false

}

console.log(searchMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 1));
// console.log(searchMatrix([[]], 80));