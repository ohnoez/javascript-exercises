const removeFromArray = function() {
    let array = arguments[0];
    const args = arguments.length - 1;
    for (i=1; i<=args; i++){
        let index = array.indexOf(arguments[i]);
        if (index > -1)
            array.splice(index, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
