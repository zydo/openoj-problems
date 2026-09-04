/**
 * @param {string} s
 * @return {number}
 */
var seatsNeeded = function (s) {
    let people = 0;
    let chairs = 0;
    for (const event of s) {
        if (event === "E") {
            people++;
            if (people > chairs) {
                chairs = people;
            }
        } else {
            people--;
        }
    }
    return chairs;
};
