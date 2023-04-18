function radixSort(nums) {
    if (nums.length === 0)
        return nums;

    let maxDigits = getMaxDigits(nums);

    for (let i = 0; i < maxDigits; i++) {
        nums = countingSort(nums, i);
    }

    return nums
}

function getMaxDigits(nums) {
    let max = 0;
    for (let num of nums) {
        max = Math.max(max, num);
    }

    return String(max).length;
}

function countingSort(nums, digit) {
    for (let num of nums) {
        let digitVal = getDigit(num, digit);
        buckets[digitVal].push(num);
    }

    nums = [].concat(...buckets);

    return nums;
}

function getDigit(num, digit) {
    return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

module.exports = radixSort;