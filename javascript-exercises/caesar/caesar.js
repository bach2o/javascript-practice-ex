const caesar = function(str, a) {
    let solved = "";
    if (a < 0) {
        a = 26 + (a % 26);
    }
    for (i = 0; i < str.length; i++) {
        let asciiNum = str[i].charCodeAt();        
        if (asciiNum >= 65 && asciiNum <= 90) {
            solved += String.fromCharCode(((asciiNum - 65 + a) % 26) + 65);
        } else if (asciiNum >= 97 && asciiNum <= 122) {
            solved += String.fromCharCode(((asciiNum - 97 + a) % 26) + 97);
        } else {
            solved += str[i];
        }
    }
    return solved;
}

module.exports = caesar
