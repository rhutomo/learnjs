/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * @param {number} lower 
 * @param {number} upper 
 * @param {number[]} arr 
 * @return {number}
 */
const sumOfRange = (lower, upper, arr) => {
    let sum = 0;
    for (let i=lower; i<=upper; i++) {
        sum += arr[i]
    }
    return sum
}

const highValInArray = arr => {
    let temp = 0
    for (let i=0; i<arr.length; i++) {
        if (temp < arr[i]) {
            temp = arr[i]
        }
    }
    return temp
}

const maximumSubArrays = nums => {
    if (Array.isArray(nums) && nums.length > 0) {
        let end = nums.length - 1
        let start = 0
        let totalInArray = []

        while(start <= end) {
            partialSum = sumOfRange(start, end, nums)
            start++
            if (start == end) {
                start = 0
                end--
            }
            totalInArray.push(partialSum)
        }

        return highValInArray(totalInArray)
    }
    return "ERROR: Invalid type of argument. Your input is " + typeof(nums)
}

var array1 = [-2,1,-3,4,-1,2,1,-5,4]

var res = maximumSubArrays(array1)
console.log(res)

