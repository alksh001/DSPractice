// ****** Method 1= Recursion ***********
// T = O(2^n) and S = O(n)

const fibonacci = (n) => {
    if (n <= 1) return n;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log("Sum = ", fibonacci(8));


// ********** Method 2 = Recursion- Memoization ***********
//  Time = O(n), space = O(n)

const fibonacciByMemo = (n) => {
    const ht = { 0: 0, 1: 1 };
    if (n in ht) {
        return ht[n];
    } else {
        ht[n] = fibonacciByMemo(n - 1) + fibonacciByMemo(n - 2);
        return ht[n];
    }
}
// console.log(fibonacciByMemo(7));

// ********* Method 3 : Iteration *********

const fibbByIteration = (n) => {
    let count = 1;
    let next = 0;
    let prev = 0;
    let curr = 1;

    while (count < n) {
        next = prev + curr;
        count++;
        prev = curr;
        curr = next;
    }
    return curr;
}


console.log("Iter", fibbByIteration(8));