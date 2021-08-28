// Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. For example:

// vowelsCounter('anehizxcv') // will return 3

1. Parameters
   Take in a string of text that may contain vowels
2. Return
   Return number of vowels within the text
3. Example
   vowelsCounter('anehizxcv') // will return 3
4. Pseudocode
    a. make a variable for vowels
    b. loop through array to find vowels
    c. add counter of vowels
    
 vowelsCounter(str) {
   const vowels = ["a","e","i","o","u"]
   
   let counter = 0
   for (let i=0;i<str.length;i++){
     if (str.includes(vowels) {
         counter++
         }
   }
   return counter
 }


