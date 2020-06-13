
const repeatString = function(word, number) {
    
    // const number = Math.floor(Math.random() * 1000);

    let n = number;
    var repeatHey = [];
    if (n < 0) 
    {
        repeatHey = "ERROR";
        return repeatHey;
    }
    else {
        for (i = 0; i < n; i++)
        {
            repeatHey[i] = word;
        }
        return repeatHey.join("");
    }


}

module.exports = repeatString
