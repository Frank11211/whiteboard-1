
/*
    Given a list of ordered numbers from 1 to 100, perform the following actions

    For every number divisible by 3, print 'Fizz'
    For every number divisible by 5, print 'Buzz'
    For every number divisible by both 3 and 5, print 'FizzBuzz'
    Input: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ..., 100

    Expected output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, ..., 100
*/

// declare empty array
var myArray = [];
var txt = "" 

// append sequentially incremented digits to an array from 1 to 100
for(var i = 0; i < 100; i++){
    // index : 0 - 99  
    // value : 1 - 100
    myArray[i] = i + 1;
}

function inputFizzBuzz(item, index, arr){
    // if digit is divisible, replace value accordingly.
    if(item % 3 == 0){
        arr[index] = "Fizz";
    }
    
    if(item % 5 == 0){
        arr[index] = "Buzz";
    }

    // Replace again if both able to be devided
    if(item % 3 == 0 && item % 5 == 0 ){
        arr[index] = "FizzBuzz";
    }
}
// execute function to each element
myArray.forEach(inputFizzBuzz);


// Display Text in index html
for(var i = 0; i < 100; i++){
    txt += myArray[i] + ", ";
}
document.getElementById("demo").innerHTML= txt;



