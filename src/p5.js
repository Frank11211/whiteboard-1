/*
Write a function that find the symmetric difference between two lists.

List 1: 4, 5, 2, 3, 1, 6

List 2: 8, 7, 6, 9, 4, 5

Expected output: 1, 2, 3, 7, 8, 9

*/

// declared 2 array 
var arr1 = [4, 5, 2, 3, 1, 6];
var arr2 = [8, 7, 6, 9, 4, 5];
var txt = "";
var uniqueValues = new Set();

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] !== arr2[j]) {  // Check if the elements are not equal
            uniqueValues.add(arr1[i]);
            uniqueValues.add(arr2[j]);
        }
    }
}

// Display in text
uniqueValues.forEach(function (value) {
    txt += value + ", ";
});

document.getElementById("demo").innerHTML = txt;
