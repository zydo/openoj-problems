/**
 * @param {number[]} grades
 * @return {number}
 */
var risingGroupCount = function (grades) {
    const n = grades.length;
    let groups = 0;
    let used = 0;
    while (used + (groups + 1) <= n) {
        groups++;
        used += groups;
    }
    return groups;
};
