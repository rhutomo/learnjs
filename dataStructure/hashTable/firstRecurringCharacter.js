/**
 * return first recurring character in arrays
 * @param {number[]} arr 
 * @return {number}
 */
const firstRecurringCharacter = arr => {
    let rec = []
    for (let i=0; i<arr.length; i++) {
        if (rec.includes(arr[i])) {
            return arr[i]
        }
        rec.push(arr[i])
    }
}

// using hash table
const firstRecurringCharacter1 = arr => {
    let map = {}
    for (let i=0; i<arr.length; i++) {
        if (map[arr[i]] !== undefined) {
            return arr[i]
        } else {
            map[arr[i]] = i
        }
    }
    return undefined
}

console.log(firstRecurringCharacter1([1,2,3]))