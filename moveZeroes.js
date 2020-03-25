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