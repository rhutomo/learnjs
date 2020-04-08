let answer = 1

// factorial function using recursion
function findFactorialRecursive(number) {
    // answer *= number
    // number--
    if (number < 1) return answer
    return number * findFactorialRecursive(number-1)
}

// factorial function using iteration
function findFactorialIterative(number) {
    for(let i = number; i > 1; i--) answer *= i
    return answer
}

console.log(findFactorialRecursive(4))
findFactorialIterative(4)