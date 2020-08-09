const fibonacci = function(a) {
    a = parseInt(a, 10);
    if (a < 0) {
        return "OOPS";
    } 

    let fiboArray = [1, 1];
    for (i = 0; i < a; i++) {
        let fiboArrayLength = fiboArray.length;
        fiboArray[fiboArrayLength] = fiboArray[fiboArrayLength - 1] + fiboArray[fiboArrayLength - 2];
        console.log(fiboArray[fiboArrayLength]);
    }
    return fiboArray[a - 1];
}

module.exports = fibonacci
