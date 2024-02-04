/*
Write a function that calculates and returns the square root of a non-negative integer x.
 You can safely assume x is a perfect square, such as 4, 9, 16, 25, 36, and so on.
*/



const inputNum = prompt("Enter number for square root")

document.getElementById("demo").innerHTML = "The square root of "+ inputNum +" is :" + squareRoot(inputNum);

function squareRoot(x){
    if(x < 2){
        return x;
    }
    let y = x;
    let z = (y + (x/y))/2;
     
    // unable to use any math library ,have to solve by own
    while(Math.abs(y-z)>=0.00001){
        y = z;
        z = (y + (x/y))/2;
    }
    return z;
}

debitcard
badcredit