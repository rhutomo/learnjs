class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName
        this.lastName = lastName
        this.idNumber = identification
    }

    printPerson() {
        console.log("Name: " + this.lastName + ", " + this.firstName + "\nID: " + this.idNumber)
    }
}

class Student extends Person {
    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification)
        this._scores = scores
    }

    calculate() {
        let avg = this._scores.reduce((x, y) => {return (x+y)}) / this._scores.length
        console.log(avg)
        switch (true) {
            case avg >= 90:
                return "O"
            case avg >= 80:
                return "E"
            case avg >= 70:
                return "A"
            case avg >= 55:
                return "P"
            case avg >= 40:
                return "D"
            default:
                return "T"
        }
    }
}

let student = new Student("Hutomo", "Rahadiant", "77777", [100,90,80,75,90,88,84,88,78,67])
student.printPerson()
console.log("Grade: " + student.calculate())