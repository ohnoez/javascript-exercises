const sumAll = function () {
    let a = arguments[0];
    let b = arguments[1];
    let sum = 0;
    if (Number.isInteger(a) && Number.isInteger(b) && a > -1 && b > -1) {
        if (a > b) {
            for (i = b; i <= a; i++) {
                sum += i;
            }
        } else {
            for (i = a; i <= b; i++) {
                sum += i;
            }
        }
    } else {
        return 'ERROR';
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
