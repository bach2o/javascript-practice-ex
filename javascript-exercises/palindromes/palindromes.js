const palindromes = function(str) {
    str = str.replace(/[^a-zA-Z ]/g, ""); // remove all special characters
    str = str.toLowerCase();                // convert string to lowercase
    str = str.replace(/\s/g, '')            // remove all empty space in string
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    if (str === joinArray) {            // compare the original string and the reversed string
        return true;
    } else return false;
}

module.exports = palindromes
