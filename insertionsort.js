array = [55, 4444, 9992, 2342, 11, 769, 384, 211, 5594];

function InsertionSort(UnsortedArray) {
    let temp;
    for (let i = 0; i <= UnsortedArray.length - 1; i++) {
        temp = UnsortedArray[i];
        for (let j = i - 1; j >= -1; j--) {
            //find position
                if (UnsortedArray[j] >= temp) {
                    //shift data
                    UnsortedArray[j + 1] = UnsortedArray[j];
                } else {
                    //insert data
                    UnsortedArray[j + 1] = temp;
                    break
                }
        }
    }
    return UnsortedArray;
}

InsertionSort(array);