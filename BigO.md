# Big-O Notation Practice

In this exercise, you’ll analyze expressions and code to figure out the time complexity. 


## Step One: Simplifying Expressions
Simplify the following big O expressions as much as possible: 

1. O(n + 10) ---> O(n) 
2. O(100 * n) --->  O(n) 
3. O(25) ---> O(1) Constant time due to only Arithmetic operation 
4. O(n^2 + n^3) ---> O(n^3) n^3 is the larger factor
5. O(n + n + n + n) ---> O(n) 
6. O(1000 * log(n) + n) ---> O(n) as n is the larger factor
7. O(1000 * n * log(n) + n) ---> O(nlog(n))
8. O(2^n + n^2) ---> O(2^n) is the larger factor
9. O(5 + 3 + 1) ---> O(1) constant time 
10. O(n + n^(1/2) + n^2 + n * log(n)^10) ---> O(n^2)


## Step Two: Calculating Time Complexity
Determine the time complexities for each of the following functions. If you’re not sure what these functions do, copy and paste them into the console and experiment with different inputs!

1. `function` logUpTo(n) {  
    for (let i = 1; i <= n; i++) {  
        console.log(i);
  }
}  
In this case, the Big O would be O(n)

2. `function` logAtLeast10(n) {  
  for (let i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}   
We only care about the worse case scenarios so Big O is O(n)
3. `function` logAtMost10(n) {  
  for (let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}  
The worst case here is Big O of 10 which runs in constant time O(1)

4. `function` onlyElementsAtEvenIndex(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}  
Big O here is O(n) where n is the length of the array

5. `function` subtotals(array) {  
  let subtotalArray = [];  
  for (let i = 0; i < array.length; i++) {  
    let subtotal = 0;  
    for (let j = 0; j <= i; j++) {  
      subtotal += array[j];  
    }  
    subtotalArray.push(subtotal);  
  }  
  return subtotalArray;  
}  
This uses a nested for loop and is iterating through the array twice. Hence it has a Big O of O(n^2)

6. `function` vowelCount(str) {  
  let vowelCount = {};  
  const vowels = "aeiouAEIOU";  

    for (let char of str) {  
    if(vowels.includes(char)) {  
      if(char in vowelCount) {  
        vowelCount[char] += 1;  
      } else {  
        vowelCount[char] = 1;  
      }  
    }
  }

  return vowelCount;
}    
        This is tricky because it does use one for loop which has a big O of O(n)but as we can see it also uses the JS built in method includes() which in this case has a Big O of O(1) because the length of the string is fixed. Therefore the time complexity here is O(n)


## Step Three: Short answer
Answer the following questions 

1. True or false: n^2 + n is O(n^2) ---> T  

2. True or false: n^2 * n is O(n^3) ---> T  

3. True or false: n^2 + n is O(n) ---> F  

4. What’s the time complexity of the .indexOf array method?  ---> This method iterates through the array to find the index of element so O(n)  

5. What’s the time complexity of the .includes array method?  ---> O(n)  

6. What’s the time complexity of the .forEach array method? ---> O(n)  

7. What’s the time complexity of the .sort array method? ---> O(nlog(n))  

8. What’s the time complexity of the .unshift array method? ---> O(n) because it shifts the other elements to new indices  

9. What’s the time complexity of the .push array method? ---> O(1) adding to the end of the array does not move other elements 

10. What’s the time complexity of the .splice array method? ---> O(n)  

11. What’s the time complexity of the .pop array method? ---> O(1)  

12. What’s the time complexity of the Object.keys() function? ---> O(n) it creates an array with all the keys from a given object so it's dependent on the number of elements in the object

13. What’s the space complexity of the Object.keys() function? ---> O(n) creates new array
