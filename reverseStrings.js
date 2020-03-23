const reverseStrings = str => {
    if (typeof(str) === "string" && str && str.length > 1) {
        let len = str.length
        var reverse = []
        for (var i = len; i >= 0; i--) {
            reverse.push(str[i])
        }
        return reverse.join('')
    }
    return "ERROR: Invalid type of argument. Your input is " + typeof(str)
}