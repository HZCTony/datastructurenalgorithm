let arr = [1,5,7,2,10,4,100,999,345,123,46,23,222,45555];

function bubblesort(array){

    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length-i-1; j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp; 
            }
        }
    }
    return array;
}

let sorted = bubblesort(arr);
console.log(sorted);