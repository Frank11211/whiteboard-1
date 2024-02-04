
/* 

Write a function that takes a string as input and finds the character that occurs the maximum number of times in the string. Return both the character and its occurrence count. If there are multiple characters with the same maximum occurrence, return any one of them.

Input: "Hello, world!"

Expected output: Character: 'l', Occurrence: 3
*/

//const txtValue = prompt("Enter any string: ");


function findMaxOccurance(txtValue){

    txtValue.trim;
    var cleanStr = txtValue.replace(/\s/g, '');
    // Create a map to store character occurrences
    const charCountMap = new Map();

    // Iterate through the cleaned string and count occurrences
    for (const char of cleanStr) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }

    let maxChar = '';
    let maxCount = 0;
  
    for (const [char, count] of charCountMap) {
      if (count > maxCount) {
        maxChar = char;
        maxCount = count;
      }
    }
  
    // Return the result as key-value pair 
    return {
      character: maxChar,
      occurrence: maxCount
    };

}

var inputString = "There are something";
var result = findMaxOccurance(inputString);

document.getElementById("demo").innerHTML = "Charecter : " + result.character + ", Occurance : " + result.occurrence; 

