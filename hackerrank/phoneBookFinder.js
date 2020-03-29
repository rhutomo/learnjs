let map = {}
function phoneBookFinder(input) {
    input = input.split('\n')
    for (let i=0; i<input.length; i++) {
        let val = input[i].split(' ')
        if (!Number.isInteger(parseInt(val[0])) && val.length === 2 && val[1].split('').length === 8) {
            map[val[0]] = val[1]
        } else if (!Number.isInteger(parseInt(val[0])) && val.length === 1) {
            if (map[val[0]] === undefined) {
                console.log("Not Found")
            } else {
                console.log(input[i] + "=" + map[val[0]])
            }
        }
    }
}

// phoneBookFinder("tomo 09123456")
// phoneBookFinder("tomu 22222222")
// phoneBookFinder("tomi 11111111")
// console.log(map)
// phoneBookFinder("tomo")
// phoneBookFinder("edward")