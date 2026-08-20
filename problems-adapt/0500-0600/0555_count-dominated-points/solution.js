/**
 * @param {number[][]} points
 * @return {number}
 */
var countDominatedPoints = function (points) {
    // x descending; y ASCENDING within equal x so that
    // equal-x points (which can never dominate each other) only ever
    // meet a running max from strictly larger-x groups.
    const props = [...points].sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    let dominated = 0;
    // Every earlier point has x >= the current one's, so the
    // current one is dominated exactly when some seen y is strictly
    // greater -- one running maximum is enough.
    let maxY = 0;
    for (const [, y] of props) {
        if (y < maxY) {
            dominated += 1;
        } else {
            // Raise the max only when not dominated, so later (smaller-x)
            // groups compare against it.
            maxY = y;
        }
    }
    return dominated;
};
