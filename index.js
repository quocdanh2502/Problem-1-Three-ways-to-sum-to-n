//Problem 1: Three ways to sum to n
const n = 10 
//1. Use For
const sumUseFor = (n)=> {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        tong += i;
    }
    return sum;
}

console.log(sumUseFor(n))

//2. Use Recursion
const sumUseRecursion = (n) => {
    if (n === 1) {
        return 1;
    }
    return n + sumUseRecursion(n - 1);
}

console.log(sumUseRecursion(n))

//3. Use Mathematical formula
const sumUseMathematicalFormula = (n) => {
    let sum = (n * (n + 1)) / 2
    return sum
}

console.log(sumUseMathematicalFormula(n))
