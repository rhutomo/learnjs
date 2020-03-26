/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
params :>
1. number[] as nums
2. number as target
*/


// naive solution O(a * b)
const twoSum = (nums, target) => {
    let len = nums.length
    let indexOfSum = []
    for (let i = 0; i < len; i++) {
        for (let j = i+1; j < len; j++) {
            if ((nums[i] + nums[j]) == target) {
                indexOfSum.push([i, j])
            }
        }
    }
    return indexOfSum
}

//  with optimization O(a + b)
const twoSum1 = (nums, target) => {
    let len = nums.length
    let hash = {}
    let indexOfSum = []

    for (let i=0; i<len; i++) {
        hash[nums[i]] = i
    }

    // divide by 2 for reduce adding multiple same arrays
    for (let j=0; j<len/2; j++) {
        let diff = target - nums[j];
        
        if (hash[diff] && (j - hash[diff]) != 0) {
            indexOfSum.push([j, hash[diff]])
        }
    }
    return indexOfSum
}