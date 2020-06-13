// ...args allow more variables to be taken into the function. args itself is an array of variables.
const removeFromArray = function(originalArray, ...args) {
    let normalArray = args;
    let modifiedArray = [];
    // loop to check for every single element in the args array (normalArray)
    for (i = 0; i < normalArray.length; i++)
    {
        // loop to compare said element in the args array to every single element in the originalArray
        for (j = 0; j < originalArray.length; j++)

        {
            // === operator also check type, not only value
            if (originalArray[j] === normalArray[i])
            {
                // splice function remove x element(s) starting from j position of the array. In this example, x = 1.
                originalArray.splice(j, 1);
            }
        }
    }
    console.log(originalArray);
    return originalArray;

}

module.exports = removeFromArray
