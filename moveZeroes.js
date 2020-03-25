/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * @param {number[]} arr 
 * @return {number[]}
 */
const moveZeroes = arr => {
    if (Array.isArray(arr) && arr.length > 0) {
        arr.forEach((element, index) => {
            if (element === 0) {
                arr.splice(index, 1)
                arr.push(element)
            }
         });
         return arr
    }
    return "ERROR: Invalid type of argument or given array less than 1."
}