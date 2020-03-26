/**
 * Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 * @param {number[]} arr 
 * @return {string} (123) 456-7890
 */
const createPhoneNumber = arr => {
    let mask = '(xxx) xxx-xxxx'
    arr.forEach(element => {
        mask = mask.replace('x', element)
    })
    return mask
}

const createPhoneNumber1 = arr => {
    return "(" + arr.slice(0,3).join('') + ") " + arr.slice(3, 6).join('') + "-" + arr.slice(6).join('')
}

createPhoneNumber1([1,2,3,4,5,6,7,8,9,0])