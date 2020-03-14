let array = [44, 5, 6, 82, 42, 32, 142];

function SelectionSort(UnsortedArray) {
    for (let i = 0; i < UnsortedArray.length - 1; i++) {
        let minValue = Number.POSITIVE_INFINITY;
        let minIndex = 0;
        for (let j = i; j < UnsortedArray.length - 1; j++) {
            //find the minimum value
            if (UnsortedArray[j] <= minValue) {
                minValue = UnsortedArray[j];
                minIndex = j;
            }
        }

        //swap data
        let temp = UnsortedArray[i];
        UnsortedArray[i] = minValue;
        UnsortedArray[minIndex] = temp;
    }

    return UnsortedArray;
}

console.log(SelectionSort(array));