/*
This file holds the solution code to recurssion problems from 
Springboard and some more recurssion problems from 

*/

/*
1.1
Product of Nums
Write a function that finds the product of an array of numbers:

EXAMPLES
product([2, 3, 4])   // 24

Solution:
Clarifying Questions
---------------------
1. What happens when the array is empty?, what do we return ? - Return 0
2. Is there a possibility of negative number elements and floats ? - Focus on +ve ints
3. If floats exist, how many decimal points are we looking to return the answer in? - Refer to ans in question 2
4. Should we expect any strings in the array? - No strings should be expected

IOCE
--------------
Input(s): Integer array
Output(s): Integer which is the product of all elements in the array
Constraint(s): Solve purely using recurssion
Edge Cases: Empty array, One Item in the array

Pseudo Code
---------------
func product(arr, n = arr.length - 1){
  we set a degenerate case, once the array is exhausted we stop
  recursing
  if(n < 0) return 1

  return arr[n] * product(arr, n - 1)
}
*/

const product = (arr, n = arr.length - 1) => {
// degenerate case, end of the array stops recurssion
if(n < 0) return 1;
return arr[n] * product(arr, n - 1);
}

/*
Time Complexity: This function is called recursively the same times
as the length of the array so it's runtime is O(n)
Space Complexity: It also takes constant space as items are not being saved
*/

// console.log(product([2, 3, 4]))   // 24

/*
1.2
Longest Word
Given a list of words, return the length of the longest:

Example
longest(["hello", "hi", "hola"])  // 5

Clarifying Question
-----------------------
1. Should we expect strings always ?, yes
2. What happens if all the words are the same length ?, return that length 
3. What happens if there are no words ?, empty list? return 0

IOCE
--------------------
Inputs: Array of string elements 
Outputs: Integer - Lenght of longest word 
Constraints: Must perform using recurssion
Edge Cases: Empty array, Elements have the same number of letters

Psuedo Code
------------------
func longest (arr, n=0):
    we want to end this recurssion when we have reached the end 
    of the array 
    if(n === arr.length) return 1

    return Math.max(arr[n].length, longest(arr, n + 1))


*/
const longest = (arr, n=0) => {
    // we want to end this recurssion when we have reached the end 
    // of the array 
    if(n === arr.length) return 1;

    return Math.max(arr[n].length, longest(arr, n + 1));
}

/*
Time complexity: This function is called recursively the same times
as the length of the array so it's run time is O(n)
Space Complexity: We are not saving any items so it's constant space O(1)

*/

/*
1.3
Every Other Character
Write a function that returns a string of every other character:

EXAMPLE
everyOther("hello")  // "hlo"

Clarifying Questions
----------------------
1. What do we return for an empty string ?
2. Do we care if the string returned forms a word ?
3. Should we expect only strings ?

IOCE
-----------------------
Inputs: Word string 
Outputs: String of every other letter
Constraints: Must achieve through recurssion
Edge Cases: Empty strings 

Pseudo code 
--------------------------
everyOther(str, n=0):
    we want to stop recursing when the string length is exhausted
    if(n === str.length) return ""

    return str[n] + everyOther(str, n + 2);

*/
const everyOther = (str, n=0) => {
    // we want to stop recursing when the string length is exhausted
    if(n >= str.length) return "";

    return str[n] + everyOther(str, n + 2);
}

/*
Time complexity: This function is called recursively n + 2 times
therefore the run time is O(n + 2) which is O(n)
Space Complexity: We are not saving any items so it's constant space O(1)

*/

/*
1.4 
Is Palindrome?
Write a function that returns true/false depending on whether 
passed-in string is a palindrome:

Example
isPalindrome("tacocat")  // true
isPalindrome("tacodog")  // false

Clarifying Questions
------------------------
1. What to return if we have an empty array ? - false 

IOCE
-----------
Inputs: String 
Outputs: Boolean
Constraints: Must be solved with recurssion
Edge Cases: Empty string 

Pseudo Code
---------------
isPalindrome(str, left=0, right=str.length - 1):
   Since it's a palindrome essentially what we have to do is compare
   each element at different ends. A palindrome is a word that is 
   still the same if reversed 
   if(left >= right) return true
   This means we've gone through the string from both ends
   if(str[left] !== str[right]) return false;

   return isPalindrome(str, left + 1, right - 1)


*/

const isPalindrome = (str, left = 0, right = str.length - 1) => {
//     Since it's a palindrome essentially what we have to do is compare
//    each element at different ends. A palindrome is a word that is 
//    still the same if reversed 
   if(left >= right) return true
//    This means we've gone through the string from both ends
   if(str[left] !== str[right]) return false;

   return isPalindrome(str, left + 1, right - 1);
    
}

// console.log(isPalindrome("tacocat"))  // true
// console.log(isPalindrome("tacodog"))  // false
/*
Time complexity: This function is called recursively the same as the length
of the string, therefore it's run time is O(n)
Space Complexity: We are not saving any items so it's constant space O(1)

*/

/*
1.5
Find Index
Given an array and a string, 
return the index of that string in the array (or -1 if not present):

EXAMPLE
let animals = ["duck", "cat", "pony"];

findIndex(animals, "cat");  // 1
findIndex(animals, "porcupine");   // -1

Clarifying Questions
---------------------------
1. Can we expect an array of strings only?
2.What do we return if the array is empty?
3. Do we have a constraint on the cap of the maximum length of the array?
4. Does case matter in this question or should we assume always lower case ?

IOCE
------------------
Inputs: Array of strings and string
Outputs: Index of string in the array
Constraints: Must solve recursively
Edge Cases: Empty array, empty string, case sensitive ?

Pseudo Code
-----------------------------
findIndex(arr, str, n = 0)
we want to return -1 if we've exhausted the array
if(n >= arr.length) return -1;
We want to make sure that we take care of the case sensitivity 
when comparing ecah element to the string 
if(arr[n].toLowercase() === str.toLowercase()) return n;

return findIndex(arr, str, n + 1);

*/

const findIndex = (arr, str, n = 0) => {
// we want to return -1 if we've exhausted the array
if(n >= arr.length) return -1;
// We want to make sure that we take care of the case sensitivity 
// when comparing ecah element to the string 
if(arr[n].toLowerCase() === str.toLowerCase()) return n;

return findIndex(arr, str, n + 1);

}

/*
Time complexity: This function is called recursively the same as the length
of the string, therefore it's run time is O(n)
Space Complexity: We are not saving any items so it's constant space O(1)

*/

/*
1.6
Reverse String
Return a copy of a string, reversed:

EXAMPLE
--------------------
revString("porcupine") // 'enipucrop'

CLARIFYING QUESTIONS
----------------------------
1. Is this problem case sensitive ?
2. Should we always expect a string ?
3. Can we use a built in method ?
4. Must we use recurssion to solve this problem?

IOCE
----------------------------
Inputs: String
Outputs: Reversed input string 
Constraints: Solve using recurssion
Edge Cases: Empty string, Int provided 

Pseudo Code
-----------------------------------
reverseString(str, n=str.length - 1)
    Essentially here we want to create a new string by concatenation
    recursing from the back of inputed string. We want to stop
    recursing once the string length is exhasted 
    if(n < 0) return ""

    return str[n] + reverseString(str, n - 1)

*/

const reverseString = (str, n=str.length - 1) => {
    // Essentially here we want to create a new string by concatenation
    // recursing from the back of inputed string. We want to stop
    // recursing once the string length is exhasted 
    if(n < 0) return "";

    return str[n] + reverseString(str, n - 1);

}

/*
Time complexity: This function is called recursively the same as the length
of the string, therefore it's run time is O(n)
Space Complexity: We are not saving any items so it's constant space O(1)

*/


/*
1.7
Gather Strings
Given an object, return an array of all the values in the object 
that are strings:

EXAMPLE
--------------------
let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];

CLARIFYING QUESTIONS
------------------------------
1. Are we to stop in the first layer of are we to keep going until
the object is exhausted ?
2. What level of nesting can we expect ?
3. Do we want to go inside and array too?


IOCE
------------------------------
Inputs: An object with different value types 
Outputs: An array holding the strings 
Constraints: There can be infinitely nested objects
Edge Cases: Nested objects, empty objects 

Pseudo Code
----------------------------------
gatherStrings(obj, strArr = [])
Essentially we loop through the values of the array and then check
if they are strings if not we key recurssing until we get all the strings 
for(key in obj){
    if(typeOf (obj[key]) === 'string'){
        strArr.Push(obj[key])
    }

    if(typeOf (obj[key]) === 'object'){
         gatherStrings(obj[key], strArr)
    }
}

return strArr

*/

const gatherStrings = (obj, strArr = []) => {
// Essentially we loop through the values of the array and then check
// if they are strings if not we key recurssing until we get all the strings 
for(let key in obj){
    if( typeof obj[key] === 'string'){
        strArr.push(obj[key])
    }

    if(typeof obj[key] === 'object' ){
      gatherStrings(obj[key], strArr);
    }
}
console.log(strArr);
return strArr

}

// console.log(typeof "string")

/*
Time complexity: This function uses a for in loop to loop continuosly
over nested arrays and objects, worst case scenario we have a runtime
of O((NM)^2) becuase if there are several objects in the bigger object
we keep iterating through their values to find a string 
Space Complexity: Here we are saving a reference type in memory so our
space complexity will be O(n)

*/

/*
1.8
Binary Search
Given an array (not a linked list!) of sorted numbers and a value, 
return the index of that value. 
If not found, return -1. 
This algorithm should run in O(log(N)) time 
(where N is the number of elements in the array):

EXAMPLE
------------------------------
binarySearch([1,2,3,4],1) // 0
binarySearch([1,2,3,4],3) // 2
binarySearch([1,2,3,4],5) // -1

Clarifying Questions
--------------------------------
1. Should we always expect an array of sorted integres ?
2. Will the integers be sorted in ascending or descending order ?
3. Should we worry about duplicates ?

IOCE
----------------------------------
Inputs: Array or integers and integer value 
Outputs: Index of integer value in the array 
Constraints: Must solve in O(log(n)) runtime time, must solve using recurssion
Edge Cases: Empty array, arrays with value not present, duplicates?

Pseudo Code
-----------------------------------
binarySearch(arr, val, left = 0, right = arr.len - 1):
 Essentially what we want to do is eliminate a section of the
 array each time through until we find the value
 
 if(left <= right){
     let mid = Math.floor((left +right) / 2 )

     if(arr[mid] === val){
         return mid
     }else if(arr[mid] > val){
         return binarySearch(arr, val, left, right = mid - 1);
     }else {
         return binarySearch(arr, val, left = mid + 1; right)
     }
 }

 once left gets greater than right that means we have exhausted
 the sorted array without finding the value 

 return -1 

*/

const binarySearch = (arr, val, left = 0, right = arr.length) => {
//  Essentially what we want to do is eliminate a section of the
//  array each time through until we find the value
 if(arr[0] > val || val > arr[arr.length - 1] ) return -1;
 if(left <= right){
     let mid = Math.floor((left + right) / 2 )

     if(arr[mid] === val){
         return mid
     }else if(arr[mid] > val){
         return binarySearch(arr, val, left, right = mid - 1);
     }else {
         return binarySearch(arr, val, left = mid + 1, right);
 }

//  once left gets greater than right that means we have exhausted
//  the sorted array without finding the value 
}
}

module.exports = { 
    product,
    longest,
    everyOther,
    isPalindrome,
    findIndex,
    reverseString,
    gatherStrings,
    binarySearch
 }