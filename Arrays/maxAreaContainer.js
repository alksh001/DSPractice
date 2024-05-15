//       Method 1 = Brute Force
//       T = O(n^2); S = O(1)

const maxAreaBruteForce = (array) => {
    let area = 0;
    for (let i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            let heigth = Math.min(array[i], array[j]);
            let width = (j - i);
            area = Math.max(area, heigth * width);
        }
    }
    return area;
};

// console.log(maxAreaBruteForce([3, 7, 5, 6, 8, 4]));


// ********** Method 2 ***********
// ********** T = O(n), S = O(1)

const maxArea = (array) => {
    let area = 0;
    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        let height = Math.min(array[i], array[j]);
        let newArea = height * (j - i);
        area = Math.max(area, newArea);
        if (array[i] < array[j]) i++;
        else j--;
    }
    return area;
}

console.log(maxArea([3, 7, 5, 6, 8, 4]));

