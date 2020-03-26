/**
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 * @param {number[]} arr
 * @return {boolean} 
 */
const containsDuplicate = arr => {
    if (Array.isArray(arr) && arr.length > 1) {
        let temp = []
        for (let i = 0; i < arr.length; i++) {
            if (temp.includes(arr[i])) {
                return true
            }
            temp.push(arr[i])
        }
        return "There's no duplicate value in arrays."
    }
    return "ERROR: Invalid type of argument or given array less than 2 numbers."
}