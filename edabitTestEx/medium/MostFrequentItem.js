/*Write a program to find count of the most frequent item of an array.

Assume that input is array of integers.

Ex.:

input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5
Most frequent number in example array is -1. It occurs 5 times in input array.*/

let counter = 1;
let maxArr = 1;
let mxArrVal = "";

// arr = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3];
arr = [1, 2, 3, 4, 1, 2, 1];
function mostFrequent(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        counter++;
      }
      if (maxArr < counter) {
        maxArr = counter;
        mxArrVal = arr[i];
      }
    }
  }
  return mxArrVal, maxArr;
}

mostFrequent(arr);
console.log("Most recurring is: " + mxArrVal + " count:" + maxArr);
