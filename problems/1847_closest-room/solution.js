/**
 * @param {number[][]} rooms
 * @param {number[][]} queries
 * @return {number[]}
 */
var closestRoom = function (rooms, queries) {
    var roomsBySize = rooms
        .map(function (r, i) {
            return i;
        })
        .sort(function (a, b) {
            return rooms[b][1] - rooms[a][1];
        });
    var queryOrder = queries
        .map(function (q, j) {
            return j;
        })
        .sort(function (a, b) {
            return queries[b][1] - queries[a][1];
        });
    function lowerBound(arr, target) {
        var lo = 0,
            hi = arr.length;
        while (lo < hi) {
            var mid = (lo + hi) >> 1;
            if (arr[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }
    var ids = [];
    var answers = new Array(queries.length);
    var ri = 0;
    for (var qi = 0; qi < queryOrder.length; qi++) {
        var j = queryOrder[qi];
        var preferred = queries[j][0];
        var minSize = queries[j][1];
        while (
            ri < roomsBySize.length &&
            rooms[roomsBySize[ri]][1] >= minSize
        ) {
            var id = rooms[roomsBySize[ri]][0];
            var pos = lowerBound(ids, id);
            ids.splice(pos, 0, id);
            ri += 1;
        }
        var pos2 = lowerBound(ids, preferred);
        var best = -1;
        var bestDist = Infinity;
        if (pos2 > 0) {
            best = ids[pos2 - 1];
            bestDist = preferred - ids[pos2 - 1];
        }
        if (pos2 < ids.length && ids[pos2] - preferred < bestDist) {
            best = ids[pos2];
        }
        answers[j] = best;
    }
    return answers;
};
