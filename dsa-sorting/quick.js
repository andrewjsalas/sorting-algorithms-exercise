/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start=0, end=arr.length-1){
    let pivotIndex = start;
    let pivotValue = arr[start];
    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotValue) {
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivotIndex = pivot(arr);
    const leftArr = arr.slice(0, pivotIndex);
    const rightArr = arr.slice(pivotIndex);

    return quickSort(leftArr).concat(quickSort(rightArr));
}

module.exports = quickSort;