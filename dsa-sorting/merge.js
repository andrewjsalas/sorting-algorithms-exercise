function merge(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice((0, mid));
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function mergeSort(arr1, arr2) {
    const mergedArr = [];
    let i = 0;
    let j = 0;

    while (i < arr2.length && arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArr.push(arr1[j]);
        j++;
    }

    return mergedArr;
}

module.exports = { merge, mergeSort};