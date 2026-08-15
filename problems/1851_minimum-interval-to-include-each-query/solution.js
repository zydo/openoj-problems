/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function (intervals, queries) {
    var sorted = intervals.slice().sort(function (a, b) {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });
    var order = [];
    for (var t = 0; t < queries.length; t++) order.push(t);
    order.sort(function (a, b) {
        return queries[a] - queries[b];
    });
    // Min-heap of [size, right] pairs.
    var heap = [];
    function less(a, b) {
        if (a[0] !== b[0]) return a[0] < b[0];
        return a[1] < b[1];
    }
    function push(item) {
        heap.push(item);
        var i = heap.length - 1;
        while (i > 0) {
            var p = (i - 1) >> 1;
            if (less(heap[i], heap[p])) {
                var tmp = heap[i];
                heap[i] = heap[p];
                heap[p] = tmp;
                i = p;
            } else {
                break;
            }
        }
    }
    function pop() {
        var top = heap[0];
        var last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            var i = 0;
            while (true) {
                var l = 2 * i + 1,
                    r = 2 * i + 2,
                    m = i;
                if (l < heap.length && less(heap[l], heap[m])) m = l;
                if (r < heap.length && less(heap[r], heap[m])) m = r;
                if (m === i) break;
                var tmp = heap[i];
                heap[i] = heap[m];
                heap[m] = tmp;
                i = m;
            }
        }
        return top;
    }
    var answers = new Array(queries.length);
    var i = 0;
    var n = sorted.length;
    for (var oi = 0; oi < order.length; oi++) {
        var j = order[oi];
        var q = queries[j];
        while (i < n && sorted[i][0] <= q) {
            push([sorted[i][1] - sorted[i][0] + 1, sorted[i][1]]);
            i += 1;
        }
        while (heap.length > 0 && heap[0][1] < q) {
            pop();
        }
        answers[j] = heap.length > 0 ? heap[0][0] : -1;
    }
    return answers;
};
