const leapYears = function(year) {
    // first condition: divisible by 4
    if (year % 4 == 0) {
        // second condition: divisible by 100 (100 = 4 * 25)
        if (year % 25 == 0) {
            // third condition: dibisible by 400 (400 = 25 * 16)
            if (year % 16 == 0) {
                return true;
            }
            else return false;
        }
        return true;
    }
    else return false;
}

module.exports = leapYears
