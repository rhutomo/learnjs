const moreZeroesThanOnes = str => {
    if (str !== null && str !== undefined) {
        if (str.length > 0 && typeof(str) === "string") {
            let arr = str.split('')
            let result = []
            for (let i=0; i<arr.length; i++) {
                console.log(arr[i].charCodeAt(0).toString(2), arr[i])
                if (arr[i].charCodeAt(0).toString(2).match(/0/g) && arr[i].charCodeAt(0).toString(2).match(/1/g) && arr[i].charCodeAt(0).toString(2).match(/0/g).length > arr[i].charCodeAt(0).toString(2).match(/1/g).length) {
                    if (!result.includes(arr[i])) {
                        result.push(arr[i])
                    }
                }
            }
            console.log(result)
            return result
        }
        
    }
}

moreZeroesThanOnes(null)