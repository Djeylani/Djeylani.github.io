'use strict';
// Meam, meadian, mode and range calculator
// Start with mean. 
// The formula is adding all together 
// and then divide it by number length.

function mean(numbers) {
    // Add the numbers together, devide them by number length, 
    // then assign the value to a new variable using reduce method
    var d = numbers.reduce(function (a, b) {
        return a + b;
    }, 0) / numbers.length;
    return d;
}
// Median function
function findMedian(numbers) {
    // @The median is the value separating the higher half from the 
    // lower half of a data sample. 
    // For a data set, it may be thought of as the "middle" value.

    // For example, in the data set [1, 3, 3, 6, 7, 8, 9], 
    // the median is 6

    // Create a median and set the value to 0, save the length of
    // numbers to a variable and then sort the numbers.;
    var median = 0,
        numLen = numbers.length;
    numbers.sort();

    // If median is even, then we need to add and divide the numbers
    // by two, & if not, then return median.
    if (numLen % 2 === 0) {
        median = (numbers[numLen / 2 - 1] + numbers[numLen / 2] / 2);
    } else {
        median = numbers[(numLen - 1) / 2];
    }
    return median;
}
// Mode function
function findMode(numbers) {
    // Mode is the number which appears most often in a set 
    // of numbers. Example: in [6, 3, 9, 6, 6, 5, 9, 3] the Mode is
    // 6 
    var modes = [],
        count = [],
        i,
        number,
        maxIndex = 0;
    for (i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count) {
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    }
    return modes;
}
// Range is the highest number divided by the lowest.
// In order to find the numbers, use Math.max and min   
function findRange(numbers) {
    var max = Math.max.apply(null, numbers),
        min = Math.min.apply(null, numbers),
        value = max - min;

    return value;

}

// a function for the called functions called calc as in calculator.
function calc(numbers) {
    mean([10, 20, 33, 34, 5, 66, 47, 28, 39]);
    findMedian([1, 1, 2, 5, 8]);
    findMode([3, 5, 4, 4, 1, 1, 2, 3]);
    findRange([1, 5, 8, 7, 4, 6, 10]);

    return numbers;
}
calc();
