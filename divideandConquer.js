/*
This file holds the code to divide and conquer or binary search 
questions solved from the Springboard exercise and a few more from
Leetcode. The delienation will be made as to which is which.

Remember that the point of using a binary search is to make sure 
we are always eliminating a part of the dataset as we search. It 
can be good when trying to bring linear time O(n) to logarithmic 
time O(log(n)).

Also this problem solving method cannot be used unless the dataset
has some other charateristics eg. Sorted 

*/

// ------------------------------------------------------
// Springboard Questions 

/* 1.1
countZeroes
Given an array of 1s and 0s which has all 1s first followed by 
all 0s, write a function called countZeroes, which returns 
the number of zeroes in the array.

Solution:

I: Sorted Array of 1's and O's (all 1's first followed by 0's)
O: Integer Count of O's in the array
C: Must have time complexity of O(log N)
E: Unsorted array ?, empty array ?, all 1's ?, all O's ?

Time complexity:
Space Complexity: 

Examples:

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0

*/

const countZeroes = (arr) => {
    // Let's assume that we've been assured by the interviewers 
    // that the array will always be sorted. We just have to
    //  deal with the other two edge cases

    if(arr.length === 0 || arr[arr.length - 1] === 1) return 0;
    if(arr[0] === 0) return arr.length;

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);

    while(leftIdx < rightIdx) {
        // let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx]

        if(midVal === 1){
            leftIdx = midIdx;
        } else {
            rightIdx = midIdx;
        }
    }

    return arr.length - rightIdx;

}
console.log(countZeroes([1,1,1,1,0,0])) // 2
// console.log(countZeroes([1,0,0,0,0])) // 4
// console.log(countZeroes([0,0,0])) // 3
// console.log(countZeroes([1,1,1,1])) // 0


// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0
// findFloor
// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1