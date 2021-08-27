// Given a string of characters as input, write a function that returns it with the characters reversed.

// describe("String Reversal", () => {
//  it("Should reverse string", () => {
//   assert.equal(reverse("Hello World!"), "!dlroW olleH");
//  });
// });

reverseString(str){
  str.split('').reverse().join('') 
}

//OR 

reverseString(str) {
  let result = "";
  for (let char or str) {
    result = char + result
  }
return result
}

//OR


function reverseString(str) {
  let result = ""
  for(let i = str.length-1; i>=0; i--){
    return+=str[i]
  }
  return result
}
