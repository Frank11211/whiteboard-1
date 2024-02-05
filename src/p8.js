function checkAnagram(str1, str2) {
    // Remove spaces and convert to lowercase 
    const cleanedStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanedStr2 = str2.replace(/\s/g, '').toLowerCase();

    // Sort characters and compare the sorted strings
    const sortedStr1 = cleanedStr1.split('').sort().join('');
    const sortedStr2 = cleanedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Prompt user for input
const inputString1 = prompt("Input First String: ");
const inputString2 = prompt("Input Second String: ");

// Check if strings are anagrams
const result = checkAnagram(inputString1, inputString2);

// Display the result
document.getElementById("demo").innerHTML = `First String  : ${inputString1} <br>
                                             Secone String : ${inputString2} <br>
                                             Result : ${result}`;
