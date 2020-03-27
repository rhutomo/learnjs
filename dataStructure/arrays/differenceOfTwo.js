/**
 * The objective is to return all pairs of integers from a given array of integers that have a difference of 2.
 * The result array should be sorted in ascending order of values.
 * The order of the integers in the input array should not matter.
 * @param {number[]} arr 
 */
const differenceOfTwo = arr => {
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) === 2) {
                console.log("Found!", arr[i], arr[j])
            }
        }
    }
} // O(n^2)

const differenceOfTwo1 = arr => {
    let map = {}
    let result = []

    for (let i=0; i<arr.length; i++) {
        map[arr[i]] = i
    }

    for (let j=0; j<arr.length; j++) {
        let sum = arr[j] + 2
        if (map[sum] !== undefined) {
            result.push([arr[j], sum])
        }
    }
    // console.log(map)
    // console.log(result)
    return result
}

differenceOfTwo1([4,1,2,3])