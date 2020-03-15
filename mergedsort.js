let array = [4, 2, 1, 5, 6, 11, 19, 7, 14, 34];

console.log(mergedSort(array));

function mergedSort(array) {
    let length = array.length;
    let mid = Math.floor(length / 2);

    if (length === 1) {
        return array;
    }

    let left = array.slice(0, mid);
    let right = array.slice(mid, length);

    return merge(mergedSort(left), mergedSort(right));
}


function merge(left_arr, right_arr) {
    let mergedArrayOfSingleLayer = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left_arr.length && rightIndex < right_arr.length) {

        if (left_arr[leftIndex] > right_arr[rightIndex]) {
            mergedArrayOfSingleLayer.push(right_arr[rightIndex]);
            rightIndex++;
        } else {
            mergedArrayOfSingleLayer.push(left_arr[leftIndex]);
            leftIndex++;
        }
    }

    while (leftIndex < left_arr.length) {
        mergedArrayOfSingleLayer.push(left_arr[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right_arr.length) {
        mergedArrayOfSingleLayer.push(right_arr[rightIndex]);
        rightIndex++;
    }

    return mergedArrayOfSingleLayer;
}


