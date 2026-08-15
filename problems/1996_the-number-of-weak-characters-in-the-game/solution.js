/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
    const props = [...properties].sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    let weak = 0;
    let maxDefense = 0;
    for (const [, defense] of props) {
        if (defense < maxDefense) {
            weak += 1;
        } else {
            maxDefense = defense;
        }
    }
    return weak;
};
