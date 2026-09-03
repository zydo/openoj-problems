/**
 * @param {number[][]} rows
 * @return {number}
 */
var cheapestPath = function (rows) {
    // Work upward from the bottom: row[j] is the cheapest path sum from
    // column j of the row being folded down to the bottom, so a single
    // array of n entries is all the state the scan ever needs.
    const row = rows[rows.length - 1].slice();
    for (let i = rows.length - 2; i >= 0; --i) {
        for (let j = 0; j <= i; ++j) {
            // From (i, j) the two allowed steps land on (i + 1, j) and
            // (i + 1, j + 1); both sums are final before the overwrite
            // retires row[j].
            row[j] = rows[i][j] + Math.min(row[j], row[j + 1]);
        }
    }
    return row[0];
};
