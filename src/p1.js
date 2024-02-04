
useBubbleSort();

/*
 -Reasone using bubble sort is cause we have fixied size and the amount of element is less. 
 -NOT SUITABLE using bubble sort on big data as time complexity is bad
*/
function useBubbleSort(){
    // Given Array
    var myArray = [21, 400, 8, -3, 77, 99, -16, 55, 111, -36, 28];

    for(var i = 0; i < myArray.length ; i++){

        for(var j = 0 ; j < myArray.length - i - 1 ; j++){
            // check if next index is larger
            if(myArray[j] > myArray[j + 1] ){
                
                // hold temporary value 
                var holdValue = myArray[j];
                myArray[j] = myArray[j + 1];
                myArray[j + 1] = holdValue;

            }

        }
    }

    // Display Value, p1_2 insert sort
    document.getElementById("demo").innerHTML = myArray;
}