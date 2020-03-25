/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * @param {number[]} nums 
 * @param {number} k 
 * @return {number[]}
 */
const rotateArray = (nums, k) => {
    if (Array.isArray(nums) && nums.length > k && typeof(k) === "number") {
        for (let i = 0; i < k; i++) {
            nums.unshift(nums[nums.length-1])
            nums.pop()
        }
        return nums
    }
    return "ERROR: Invalid type of arguments. Check your first and second argument."
}