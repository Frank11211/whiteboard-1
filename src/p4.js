/*
Write a function that find the intersection between two lists.

List 1: 4, 5, 2, 3, 1, 6

List 2: 8, 7, 6, 9, 4, 5

Expected output: 4, 5, 6

*/

// declared 2 array 
var arr1 = [4, 5, 2, 3, 1, 6];
var arr2 = [8, 7, 6, 9, 4, 5];
var txt = "";


// ==== Initiali Method ======
// - use arr1 as base array and check each element 1 by 1 with loop
// ===========================

// for(var i = 0; i < arr1.length ; i++){
//     for(var j = 0; j < arr2.length ; j++){
        
//         if(arr1[i] == arr2[j]){
//             txt += arr1[i] + ", ";
//         }
//     }
// }

// ==== Improve Method ======
// - Use Set and straight compare with arr1 insted loop through each array
// ===========================

var setArray2 = new Set(arr2);
for(var i = 0; i < arr1.length ; i++){
    // save value if arr2 value found in arr1. 
    if(setArray2.has(arr1[i])){
        txt += arr1[i] + ", ";
    }
}


document.getElementById("demo").innerHTML = txt;
