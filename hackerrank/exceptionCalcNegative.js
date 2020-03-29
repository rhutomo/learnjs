class Calculator {
    constructor() {

    }

    power(n, p) {
        let res = 1
        if (n >= 0 && p >= 0) {
            for (let i=0; i<p; i++) {
                res *= n
            }
            return res
        } else {
            return "n and p should be non-negative"
        }
    }
}