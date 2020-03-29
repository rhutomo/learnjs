const reverseOrder = arr => {
    let reverse = []
    for (let i = arr.length-1; i >= 0; i--) {
        reverse.push(arr[i])
    }
    return reverse.join(' ').toString()
}

console.log(reverseOrder([2,3,3,2,4,1]))