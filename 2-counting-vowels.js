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

//OR REGEX

function vowelsCounter(text) {
      //Search text with Regex and store all matching instances
      let matchingInstances = text.match(/[aeiou]/gi)
      //g stands for global search which means that after finding
      //the first match, it will not start over from the beginning
      //but continue searching from the end of the previous match.
      
      //i stands for case insensitive search which makes the whole expression case-insensitive
      //(for example /xyz/i would match XyZ.
      
      //Check if matching instances exist then calculate length
      if (matchingInstances) {
           return matchingInstances.length
      } else {
         return 0
      }
}





