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

Time complexity: O(log(n))
Space Complexity: O(1) no reference types were stored

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
    

    while(leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[midIdx]

        if(midVal === 0 && arr[midIdx - 1] === 1){
            return arr.length - midIdx
        } else if(midVal === 0 && arr[midIdx -1  ] === 0) {
            rightIdx = midIdx - 1;
        }else {
            leftIdx = midIdx + 1;
        }
    }

    return arr.length - rightIdx;

}
// console.log(countZeroes([1,1,1,1,0,0])) // 2
// console.log(countZeroes([1,0,0,0,0])) // 4
// console.log(countZeroes([0,0,0])) // 3
// console.log(countZeroes([1,1,1,1])) // 0

/* 1.2 

sortedFrequency

Given a sorted array and a number, write a function called 
sortedFrequency that counts the occurrences of the number 
in the array

Solution:

I: Sorted Array and Integer
O: Integer Count of # of occurences of input integer
C: Must have time complexity of O(log N)
E: Unsorted array ?, empty array ?, 
array with all elements < #, array with all elements > #

Time complexity: O(log(n))
Space Complexity: O(1) no reference types being saved

Examples:

sortedFrequency([1,1,2,2,2,2,3],2) // 4
sortedFrequency([1,1,2,2,2,2,3],3) // 1
sortedFrequency([1,1,2,2,2,2,3],1) // 2
sortedFrequency([1,1,2,2,2,2,3],4) // -1

*/

//Would have to rely on helper functions to find the first and last
//occurence of num

const sortedFrequency = (arr, num) => {

    let i = first(arr, num);
    if(i === -1) return i;
    let j = last(arr, num);
    // console.log(i, j);
  
    return j - i + 1;
}

const first = (arr, num, high = arr.length - 1, low = 0) => {
    // console.log(high, low)
    if(high >= low){
        let mid = Math.floor((low + high)/2);
        if((mid === 0 || num > arr[mid - 1]) && arr[mid] === num){
            return mid;
        }else if(num > arr[mid]){
            return first(arr, num, high, mid + 1);
        }else {
            return first(arr, num, mid - 1, low);
        }
    }
    return -1;
}

const last = (arr, num, high = arr.length - 1, low = 0) => {
    // console.log(high, low);
    if(high >= low){
        let mid = Math.floor((low + high)/2);
        if((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num){
            return mid;
        }else if(num < arr[mid]){
            return last(arr, num, (mid - 1), low);
        }else {
            return last(arr, num, high, (mid + 1));
        }
    }
    return -1;
}

// console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
// console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1
// console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
// console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1

/*
1.3
findRotatedIndex
Write a function called findRotatedIndex which accepts a 
rotated array of sorted numbers and an integer. 
The function should return the index of num in the array. 
If the value is not found, return -1.

Solution:

I: Rotated Sorted Array and Integer
O: Integer: Index of Integer Inputed  
C: Must have time complexity of O(log N)
E: Unsorted array ?, empty array ?, 
array with all elements < #, array with all elements > #, dups ?

Time complexity: O(log(n))
Space Complexity: O(1) no reference types saved

Examples:

findRotatedIndex([3,4,1,2],4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37,44,66,102,10,22],14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

We'll have to solve this by first getting a pivot point, then splitting
the arrays into ttwo and searching each individual array. We'll need 
helper functions to achieve this 

*/

const binarySearch = (arr, num, low = 0, high = arr.length - 1) => {
    if(arr.length === 0) return -1;
    if (high >= low){
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] === num){
            return mid;
        }else if(arr[mid] > num){
            return binarySearch(arr, num, low, mid - 1)
        }else {
            return binarySearch(arr, num, mid + 1, high)
        }
    }

    return -1;
}

const findPivot = (arr, low = 0, high = arr.length - 1) => {

    if(high < low) return -1;
    if(high === low) return low;

    let mid = Math.floor((low + high) / 2);
    if(mid < high && arr[mid] > arr[mid + 1]) return mid;
    if(mid > low && arr[mid] < arr[mid - 1]) return mid - 1;

    if(arr[low] >= arr[mid]){
        return findPivot(arr, low, mid - 1);
    }
    return findPivot(arr, mid + 1, high);

}

const findRotatedIndex = (arr, num) => {
  let pivot = findPivot(arr, 0, arr.length - 1);
 
 if(pivot === -1) return binarySearch(arr, num, 0, arr.length - 1);

 if(arr[pivot] === num) return pivot;

 if(arr[0] <= num){
     return binarySearch(arr, num, 0, pivot - 1);
 }

 return binarySearch(arr, num, pivot + 1, arr.length - 1);
}

/*
1.4

findRotationCount
Write a function called findRotationCount which accepts an array of 
distinct numbers sorted in increasing order. The array has been rotated 
counter-clockwise n number of times. 
Given such an array, find the value of n.

Solution:

I: Rotated Sorted Array of increasing order
O: Integer: Number of times array has been rotated 
C: Must have time complexity of O(log N)
E: Unsorted array ?, empty array ?, 
array with all elements < #, array with all elements > #, dups ?

Time complexity: O(log(n))
Space Complexity: O(1) no reference types saved

Examples:

findRotationCount([15, 18, 2, 3, 6, 12]) // 2
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0

To solve this question, we again find the pivot point and then count from the 
pivot to the beginning of the array. We'll need helper functions
*/

const findRotationCount = (arr) => {
    let pivot = pivotPoint(arr);
    return pivot + 1;
}

const pivotPoint = (arr, low = 0, high = arr.length - 1) => {
    if(high < low) return -1;
    if(high === low) return low;

    let mid = Math.floor((low + high) / 2);

    if(mid < high && arr[mid] > arr[mid + 1]) return mid;
    if(mid > low && arr[mid] < arr[mid - 1]) return mid - 1;

    if(arr[low] < arr[mid]){
        return pivotPoint(arr, mid + 1, high);
    }

    return pivotPoint(arr, low, mid - 1);
}

/*
1.5

findFloor
Write a function called findFloor which accepts a sorted array 
and a value x, and returns the floor of x in the array. 
The floor of x in an array is the largest element in the 
array which is smaller than or equal to x. 
If the floor does not exist, return -1.

Solution:

I: Sorted Array of increasing order and integer x
O: Integer: Floor of array
C: Must have time complexity of O(log N)
E: Unsorted array ?, empty array ?, 
array with all elements < #, array with all elements > #, dups ?

Time complexity: O(log(n))
Space Complexity: O(1) no reference types saved

Examples:

findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1


*/

const findFloor = (arr, x) => {
    if(arr[0] > x) return -1;
    if(arr[arr.length - 1] <= x) return arr[arr.length - 1];

    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] <= x && arr[mid + 1] > x){
            return arr[mid];
        }else if(arr[mid] < x && arr[mid + 1] <= x){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
}

// -----------------------------------------------------------------
// End of Springboard Questions and start of LeetCode Questions 
// -----------------------------------------------------------------

/*
1.6

Kth Largest Element in an Array
Given an integer array nums and an integer k, return the kth 
largest element in the array.

Note that it is the kth largest element in the sorted order, 
not the kth distinct element.

Solution:

I: Integer array and k value (integer)
O: Integer: The kth largest element
C: Must be the kth largest in the sorted order
E: Unsorted array ?, empty array ?, 
array with elements < k, k = 0 dups ?

Time complexity: O(nlog(n)) we used the sort method in JS
Space Complexity: O(1) we havent saved anything

Examples:

kthLargest([3,2,1,5,6,4], 2) // 5
kthLargest([3,2,3,1,2,4,5,5,6], 4) // 4

Th way to solve this will be to sort the array first then count 
backwards from the last element in the array. The problem is that
we have dups and will only have to report the first element of the 
dup
*/

const kthLargest = (nums, k) => {
    // sort first and then return the -k element
    // let sortedNums = nums.sort((a, b) => a - b);
    // return sortedNums[nums.length - k];
    return nums.sort((a, b) => a - b)[nums.length - k];
}
console.log(kthLargest([3,2,1,5,6,4], 2));
console.log(kthLargest([3,2,3,1,2,4,5,5,6], 4));
// Export functions for testing
module.exports ={ countZeroes, sortedFrequency, findRotatedIndex, findRotationCount, findFloor };