/**
 * @param {number[][]} beacons
 * @param {number[]} center
 * @param {number} radius
 * @return {number[]}
 */
var strongestBeacon = function (beacons, center, radius) {
    const [cx, cy] = center;
    let best = null;
    let bestQuality = -1;
    for (const [x, y, quality] of beacons) {
        if (Math.abs(x - cx) + Math.abs(y - cy) > radius) {
            continue;
        }
        // Strictly better quality wins; on a quality tie the
        // lexicographically smaller coordinate wins.
        if (
            best === null ||
            quality > bestQuality ||
            (quality === bestQuality && (x < best[0] || (x === best[0] && y < best[1])))
        ) {
            best = [x, y];
            bestQuality = quality;
        }
    }
    return best !== null ? best : [-1, -1];
};
