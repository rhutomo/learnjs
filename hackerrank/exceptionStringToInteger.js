const exceptionStringToInteger = S => {
    try {
        if (Number.isInteger(parseInt(S))) {
            console.log(S)
        } else {
            throw "Bad String"
        }
    } catch(err) {
        console.log(err)
    }
}

exceptionStringToInteger('za')