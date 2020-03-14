// Iterative function to implement Binary Search 
let binarySearch = function (arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        // Find the mid index 
        let mid = Math.floor((start + end) / 2);

        // 如果找到了，就把陣列的index返回
        if (arr[mid] === target) return mid;

         // 如果沒找到，就看接下來要找左邊還是右邊
        else if (arr[mid] < target)
            start = mid + 1;
        else
            end = mid - 1;
    }
    return false;
}


let arr = [1, 3, 5, 7, 8, 9]; //已排好的陣列
let targetNum = 9;  //要找的數字

let answer = binarySearch(arr, targetNum);
if (answer) {
    console.log(targetNum + " is found at " + answer);
}
else {
    console.log("Element not found!");
}


targetNum = 6; //要找的數字
let answer2 = binarySearch(arr, targetNum);
if (answer2) {
    console.log(targetNum + " is found at " + answer2);
} else {
    console.log("Element not found!");
}