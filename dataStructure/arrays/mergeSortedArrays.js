/*
merge sorted array given from 2 parameters
example : arg1 = [1, 4, 5, 10]; arg2 = [0, 2, 11]
expected : [0, 1, 2, 4, 5, 10, 11]
*/
const mergeSortedArrays = (arr1, arr2) => {
  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length > 0 && arr2.length > 0) {
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
  return "ERROR: Invalid type of argument or given array is less than 1."
}

const merging = (arr1, arr2) => {
  for (let i=0; i<arr2.length; i++) {
    arr1.push(arr2[i])
  }
  return arr1
}

// simple line of code with sort: O(1)
const mergeSortedArrays1 = (arr1, arr2) => {
  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length > 0 && arr2.length > 0) {
    merge = merging(arr1, arr2)
    return merge.sort((low, high) => { return low-high })
  }
  return "ERROR: Invalid type of argument or given array is less than 1."
}