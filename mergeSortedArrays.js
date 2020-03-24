/*
merge sorted array given from 2 parameters
example : arg1 = [1, 4, 5, 10]; arg2 = [0, 2, 11]
expected : [0, 1, 2, 4, 5, 10, 11]
*/
const mergeSortedArrays = (arr1, arr2) => {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    var sorted = []
    var index = 0
    const totalItems = array1.length + array2.length
    for (let i = 0; i < totalItems; i++) {
      if (array1[index] > array2[index] || array1[index] == undefined) {
        sorted.push(array2[index])
        array2.shift()
      } else {
        sorted.push(array1[index])
        array1.shift()
      }
    }
    return sorted
  }
  return "ERROR: Invalid type of argument. Your input is " + typeof(arr1) + " and " + typeof(arr2)
}