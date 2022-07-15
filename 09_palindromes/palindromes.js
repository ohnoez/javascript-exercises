const palindromes = function (palindrome) {
    const alphanumeric = palindrome.toUpperCase().replace(/[^a-z0-9]/gi, '');
    const reversed = palindrome.toUpperCase().replace(/[^a-z0-9]/gi, '').split("").reverse().join("");

    if (alphanumeric === reversed){
        return true;
    }
    return false;
};

console.log(palindromes('racecar'));

// Do not edit below this line
module.exports = palindromes;
