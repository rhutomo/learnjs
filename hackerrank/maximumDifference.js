/**
 * A computeDifference method that finds the maximum absolute difference between any 2 numbers in N and stores it in the maximumDifference instance variable.
 * @param {number[]} arr 
 */
const maximumDifference = arr => {
    let max = 0
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            console.log(arr[i] + " - " + arr[j] + " = " + Math.abs(arr[i] - arr[j]))
            if (Math.abs(arr[i] - arr[j]) > max) {
                max = Math.abs(arr[i] - arr[j])
            }
        }
    }
    console.log(max)
} // O(n^2) time complexity and O(1) space complexity

const maximumDifference1 = arr => {
    arr.sort((a,b) => {return a-b})
    return arr[arr.length-1] - arr[0]
} // O(1)

console.log(maximumDifference1([7,1,2,5,3,4,8,11,15,20,19]))