let array = [2, 11, 9, 7, 5, 3, 1, 55, 73, 784, 27, 91, 128, 311, 47, 237, 112];


function QuickSort(arr, leftIndex, rightIndex) {

    let pivot = Math.floor((leftIndex + rightIndex) / 2);
    let pivotVal = arr[pivot];

    let left = leftIndex;
    let right = rightIndex - 1;
    let leftCheck = false;   // check if left stops
    let rightCheck = false;   // check if right stops

    for (let i = 0; i < arr.length; i++) {
        console.log('arr = ', arr);
        if (left < right) { // left must smaller than right. if not, this round will end.

            // leftside value should be smaller. if value is smaller, go forward to the next value.
            if (arr[left] < pivotVal) {
                left++;
            } else {
                leftCheck = true; // not smaller, so stops
            }
            // rightside value should be larger. if value is larger, go backward to the previous value.
            if (arr[right] > pivotVal) {
                right--;
            } else {
                rightCheck = true; // not larger, so stops
            }

            // both stops, swap and then go to the next value separately.
            if (leftCheck == true && rightCheck == true) {
                swap(arr, left, right);
                leftCheck = false;
                rightCheck = false;
                left++;
                right--;
            }

        } else if (left == right) {
            if (left > pivot) {
                if (arr[left] < pivotVal) {
                    swap(arr, left, pivot);
                }
            } else if (left < pivot) {
                if (arr[left] > pivotVal) {
                    swap(arr, left, pivot);
                }
            }
            break;
        } 
    }

    if (leftIndex < left) {
        QuickSort(arr, leftIndex, left);
    } else {
        return arr;
    }

    if (rightIndex > right) {
        QuickSort(arr, right, rightIndex);
    } else {
        return arr;
    }

}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


QuickSort(array, 0, array.length);
console.log('final = ', array);