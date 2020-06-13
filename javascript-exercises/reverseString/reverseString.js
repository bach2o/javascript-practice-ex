const reverseString = function(word) {
    wordLength = word.length;
    var reverseWord = []; 
    word = word.split("");
    for (i = 0; i < wordLength; i++) {
        reverseWord[i] = word[wordLength - i - 1];
    }
    reverseWord = reverseWord.join("");
    return reverseWord;

}

module.exports = reverseString
