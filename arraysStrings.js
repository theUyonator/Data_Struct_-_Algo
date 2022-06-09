/*
This file contains data and Algo problems solved from the book "Cracking the Coding Interview"
for Arrays and Strings which is chapt 1 of the interview prep questions section

*/

// 1.1
//Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
//cannot use additional data structures?

/*SOLUTION
To implement this algo, I think first about using a frequency counter func,
then counting out the characters in the string and if any of them are greater than 1 we return true,
else false

---------------------------------------------------------------------------------------------------------
Pseudo Code
---------------------------------------------------------------------------------------------------------
func freqCounter (struc){
    freq = new Map()
    for let val in struc:
        count = freq.get(val) || 0
        freq.set(val, count + 1)

    return freq
}

This frequency counter can be used for arrays and strings.
We then implement the isUnique function

func isUnique(str){
    freq = freqCounter(str)

    for let key of freq.keys():
        if freq.has(key) > 1 return false 

    return true
}


*/

const freqCounter = (struc) => {
    let freq = new Map()
    for(let val of struc){
        let count = freq.get(val) || 0
        freq.set(val, count + 1)
    }
    return freq
}

const isUnique = (str) => {
    let frequencies = freqCounter(str);
   // console.log(frequencies.get("a"));

    for(let key of frequencies.keys()){
        if(frequencies.get(key) >= 2){ 
            return false;
        }
    };
    return true;
}
//console.log(freqCounter('palatable'));
//console.log(isUnique('palatable'));

/* If we can't use additional data structures like the JS Map I used in the freq counter,
we can compare every character of the string to every other character using nested loops
which will result in Big O of O(n^2)
*/

// 1.2
//Check Permutation: Given two strings, write a method to decide if one is a permutation of the
//other

/*SOLUTION
This is another way of saying find out if these. two strings are anagrams. Again we use the frequency counter 
to compare these two strings and check if the frequencies of both characters match, if not these are not
permutations 

---------------------------------------------------------------------------------------------------------
Pseudo Code
---------------------------------------------------------------------------------------------------------
func freqCounter (struc){
    freq = new Map()
    for let val in struc:
        count = freq.get(val) || 0
        freq.set(val, count + 1)

    return freq
}

This frequency counter can be used for arrays and strings.
We then implement the isUnique function

func checkPermutations(str1, str2){
    if(str1.len !== str2.len) return false
    firstFreq = freqCounter(str1)
    secondFreq = freqCounter(str2)

    for let key of firstFreq.keys():
        if secondFreq.has(key) === false return false 

        if firstFreq.get(key) !== secondFreq.get(key) return false

    return true
}


*/

const checkPermutations = (str1, str2) => {
    if(str1.length !== str2.length){
        return false;
    }
    let firstFreq = freqCounter(str1);
    let secondFreq = freqCounter(str2);

    //console.log(firstFreq);
    //console.log(secondFreq);

    for(let key of firstFreq.keys()){
        if(secondFreq.has(key) === false){
            return false;
        } 

        if(firstFreq.get(key) !== secondFreq.get(key)){
            return false;
        }
    }
    return true;
}

//console.log(checkPermutations('bakarat', 'raktabak'));
//console.log(checkPermutations('bakarat', 'ratabak'));

/*
When solving this question, you want to confirm with ther interviewer somethings,
ask if the this permutation comparison is case sensitive, if whitespace is significant
As you can see for this problem I have assumed that it's all lower casse and there are no white spaces
*/


// 1.3
//URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
//has sufficient space at the end to hold the additional characters, and that you are given the "true"
//length of the string. (Note: if implementing in Java, please use a character array so that you can
//perform this operation in place.)

//EXAMPLE
//Input: "Mr John Smith ", 13
//Output: "Mr%20John%20Smith"

/*SOLUTION
The first thing we want to ask the interviewer is if white spaces count, for the purpose of this exercise,
we'll be ignoring whietspaces. How we solved this problem tho is that we remove all whitespaces and then
make the string into an array, then switch " " with "%20" after this we join the string back

---------------------------------------------------------------------------------------------------------
Pseudo Code
---------------------------------------------------------------------------------------------------------

func URLify(str){
    strArr = str.trim().split("");

    for let i = 0; i < strArr.len; i++ :
        if strArr[i] = " " strArr[i] = "%20"
return strAr.join("");
}

*/

const URLify = (str) => {
    let strArr = str.trim().split("");

    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === " ") strArr[i] = "%20";
    }
return strArr.join("");
}
//console.log(URLify("Mr John Smith "));

/*
 This method gives a Big O of O(n) for time complexity. Another thbing to take note of here is that strings in JS are immutable
 and so we had to change to an array first 
*/


// 1.4
//Palindrome Permutation: Given a string, write a function to check if it is a permutation of
//a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A
//permutation is a rearrangement of letters. The palindrome does not need to be limited to just
//dictionary words.

//EXAMPLE
//Input: Tact Coa
//Output: True (permutations: "taco cat'; "atc o eta·; etc.)

/*SOLUTION
The first thing we want to ask the interviewer is the palindrome needs to be limited to just dictionary words.
In this case, we are assuming that it does not. The next thing to ask is that the solution is case sensitiy, in this case
we are ignoring the case. Next we want to make sure what the rules of a palindrome are:
A palindrome is a word or a phrase that is the same forwrads and backwards. Therefore all letters should appear an even
number of times with only one letter allowed to appear an odd number of times.

Knowing this, we count the frequencies and make sure that these rules apply

---------------------------------------------------------------------------------------------------------
Pseudo Code
---------------------------------------------------------------------------------------------------------
func freqCounter (struc){
    freq = new Map()
    for let val in struc:
        count = freq.get(val) || 0
        freq.set(val, count + 1)

    return freq
}

This frequency counter can be used for arrays and strings.
We then implement the isUnique function

func palindromePermutation(str){
    newstr = str.trim().toLowerCase();
    freqCount = frequenciesCounter(newStr)
    oddCount = 0

    for let key of freqCount:
        if freqCount.get(key) % 2 !== 0:
            oddCount++
    
return oddCount === 1;
}

*/

const palindromePermutation = (str) => {
    let newStr = str.trim().toLowerCase();
 //   console.log(newStr);
    let freqCount = freqCounter(newStr);
//   console.log(freqCount);
    let oddCount = 0;
//Remember not to count spaces withing the phrase
    for(let key of freqCount.keys()){
        if(key !== " " && freqCount.get(key) % 2 !== 0) oddCount++;
    }
//console.log(oddCount);    
return oddCount === 1;
}

//console.log(palindromePermutation("Tact Coa"));
//console.log(palindromePermutation("Nun"));
//console.log(palindromePermutation("Level"));

// 1.5
//One Away: There are three types of edits that can be performed on strings: insert a character,
//remove a character, or replace a character. Given two strings, write a function to check if they are
//one edit (or zero edits) away.

//EXAMPLE
//pale, ple -> true
//pales, pale -> true
//pale, bale -> true
//pale, bae -> false

/*SOLUTION
The first thing we want to ask the interviewer is if it's safe to assume that only one change can be made at a time, 
also confirm that the resulting strings dont necessarily have to be valid english.Also we want to know if the case of the 
strings matter. In this case we make an assumption that all inputs are lower cased

After asking these questions, it's clear that what we have to do is compare the letters of string 2 to make sure how many 
of these letters appear in string one. When we get a count we can compare this count to the length of string one to know
how many edits were made.

---------------------------------------------------------------------------------------------------------
Pseudo Code
---------------------------------------------------------------------------------------------------------

func oneAway(str1, str2){
  validLetters = 0
  str1Len = str1.length
  str2Len = str2.length
  for(i = 0; i < str2Len; i++){
      if(str1.includes(str2[i])){
          validletters++
      }
  }
  if(str1Len === validLetters && str1Len === str2Len){
      return true
  }else if(str1Len === str2Len && validLetters === str1Len - 1){
      return true
  }else if(str2Len === str1Len - 1 && validLetters === str2Len ){
      return true
  }else if(str2Len === str1Len + 1 && validLetters === str1Len){
      return true
  }else{
      return false
  }

}

*/
const oneAway = (str1, str2) => {
  
  let validLetters = 0;
  let str1Len = str1.length;
  let str2Len = str2.length;
  
  for(let i = 0; i < str2Len; i++){
      if(str1.includes(str2[i])){
          validLetters++;
      };
  };
  if(str1Len === validLetters && str1Len === str2Len){
    return true
  }else if(str1Len === str2Len && validLetters === str1Len - 1){
      return true
  }else if(str2Len === str1Len - 1 && validLetters === str2Len ){
      return true
  }else if(str2Len === str1Len + 1 && validLetters === str1Len){
      return true
  }else{
      return false
  }
}

// console.log(oneAway("pale", "ple"));
// console.log(oneAway("pales", "pale"));
// console.log(oneAway("pale", "bale"));
// console.log(oneAway("pale", "bae"));

// console.log(oneAway("xab", "xa"));
// console.log(oneAway("xabc", "xa"));
// console.log(oneAway("xabc", "xabc"));
// console.log(oneAway("xa", "xabc"));

/*
There might be a better way to solve this problem but for right now this is the only way I see using brute force and a bunch
of conditional statements to check several conditions on here. This will give for time complexity a Big O of O(n) and for 
space a Big o of O(1)
*/

// 1.6
//String Compression: Implement a method to perform basic string compression using the counts
//of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
//"compressed" string would not become smaller than the original string, your method should return
//the original string. You can assume the string has only uppercase and lowercase letters (a - z).

//EXAMPLE
//aabcccccaaa, a2b1c5a3


/*SOLUTION
The first thing to do here will be to confirm the assumption of using only a single case. Once we do this the problem 
becomes pretty clear as frequency mapping problem. Each letter in the string is counted and their frequency replaces 
the rest of their letters. Another question to ask will be the order the letters appear in. From what I can see, the 
letters are ordered correctly, asking the interviewer is they'd want the output string ordered differently will be an 
inportant question that controls what your output ends up looking like. Also what I noticed is that if the same letter appears
through the string at different positions we'll have to do the counts based on position and so since a map or a javascript
object cannot hold duplicates we'd have to set a variable of count and stop everytime a letter changes.

---------------------------------------------------------------------------------------------------------
Pseudo Code
---------------------------------------------------------------------------------------------------------

func stringCompression(str){
    outputString = "";
    letterCount = 0;

   for(let i = 0; i < str.length; i++){
       if(str[i] === str[i + 1]){
           letterCount++
       }else{
           outputString += `${str[i]}${letterCount}`;
           letterCount = 0;
       }
   }

    return outputString;
}

*/
const stringCompression = (str) => {
    let outputString = "";
    let letterCount = 1;

   for(let i = 0; i < str.length; i++){
       if(str[i] === str[i + 1]){
           letterCount++
       }else{
           outputString += `${str[i]}${letterCount}`;
           letterCount = 1;
       }
   }

   if(outputString.length > str.length) return str;

    return outputString;
  }
  
  console.log(stringCompression("aabcccccaaa"));
 
  

/*
Question 1.7
Rotate Matrix: Given an image represented by an NxN matrix, 
where each pixel in the image is 4 bytes, write a method to 
rotate the image by 90 degrees. Can you do this in place?
---------------------------------------------------
solution
We are taking a matrix which is an array of arrays of the same size
eg. [[1, 2, 4],
     [2, 4, 5],
     [6, 9, 10]]
as we can see this is a 3x3 matrix and what we've been asked to do is
rotate it 90 deg.

Questions:
1. Clockwise or anticlock wise ? - Clockwise
2. The image being 4 bytes per pixel, what does that mean and what use
is it here?
3. Is there a situation where we'll get an empty matrix?
4. By rotating in place do we mean not ouputing a new array and is this possible? -
Yes that is what we mean and it is indeed possible because it's and NXN matrix and a 
perfect square

Outcome:
Since we are rotating it clockwise 90 deg we expect teh example above 
to look like so:
[[6, 2, 1],
 [9, 4, 2],
 [10, 5, 4]]
----------------------------------------------------

*/


const rotateMatrix = (m) => {
    // Our approach here will be to first swap the rows and colums and then reverse
    // the rows. To swap the rows and columns we used a nested loop
    for(let i = 0; i < m.length; i++){
        for(let j = i; j < m[0].length; j++){
            [m[i][j], m[j][i]] = [m[j][i], m[i][j]];
        }
    };

    for(let r = 0; r < m.length;r++){
        m[r].reverse();
    };

    return m;
}

// console.log(rotateMatrix([[1, 2, 4], [2, 4, 5], [6, 9, 10]]));
