const reverseString = function(str) {
    let array = str.split('');
    array.reverse();
    return str = array.join('');
};

// Do not edit below this line
module.exports = reverseString;
