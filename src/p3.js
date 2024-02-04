/*
- Write a function that generate Fibonacci sequence using recursion technique. 
- Allow the user to specify the number of Fibonacci sequence elements to generate.
*/

const nTermNumber = prompt('Enter the number of terms: ');
var txt = "";

function fibonaciMethod(n){
    if (n <= 1) {
        return n;
    }
    // using recursion
    return fibonaciMethod(n - 1) + fibonaciMethod(n - 2);
}

for (let i = 0; i < nTermNumber ; i++) { 
    txt += fibonaciMethod(i) + ", ";
};

// display value
document.getElementById("demo").innerHTML = txt;