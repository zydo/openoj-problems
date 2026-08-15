/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function (n) {
    let cover = 0,
        moves = 0;
    while (cover < n) {
        moves++;
        cover += moves;
    }
    return moves;
};
