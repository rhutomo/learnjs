const birthdayCakeCandles = arr => {
    let map = {}
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        if(map[arr[i]] !== undefined) {
            map[arr[i]] +=1
        } else {
            map[arr[i]] = 1
        }
        if (arr[i] > temp) {
            temp = arr[i]
        }
    }
    console.log(map[temp])
}

birthdayCakeCandles([4,1,2,4,5,6,6,6])