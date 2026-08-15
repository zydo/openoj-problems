/**
 * @param {number[]} nums
 * @return {number[]}
 */
var onceTwice = function (nums) {
    const counts = new Map();
    for (const x of nums) counts.set(x, (counts.get(x) || 0) + 1);
    let once = 0,
        twice = 0;
    for (const [value, count] of counts) {
        if (count === 1) once = value;
        else if (count === 2) twice = value;
    }
    return [once, twice];
};
