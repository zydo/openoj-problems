class Solution {

    private long[] seg;
    private int size;

    public int[] leftmostBuildingQueries(int[] heights, int[][] queries) {
        int n = heights.length;
        size = 1;
        while (size < n) {
            size <<= 1;
        }
        seg = new long[2 * size];
        for (int i = 0; i < n; i++) {
            seg[size + i] = heights[i];
        }
        for (int i = size - 1; i >= 1; i--) {
            seg[i] = Math.max(seg[2 * i], seg[2 * i + 1]);
        }

        int[] result = new int[queries.length];
        for (int q = 0; q < queries.length; q++) {
            int a = queries[q][0];
            int b = queries[q][1];
            if (a > b) {
                int tmp = a;
                a = b;
                b = tmp;
            }
            if (a == b) {
                result[q] = a;
            } else if (heights[a] < heights[b]) {
                result[q] = b;
            } else {
                long threshold = Math.max(heights[a], heights[b]);
                result[q] = findFirst(1, 0, size, b + 1, n, threshold);
            }
        }
        return result;
    }

    private int findFirst(
        int node,
        int nl,
        int nr,
        int ql,
        int qr,
        long threshold
    ) {
        if (nr <= ql || qr <= nl || seg[node] <= threshold) {
            return -1;
        }
        if (nr - nl == 1) {
            return nl;
        }
        int mid = (nl + nr) >>> 1;
        int res = findFirst(2 * node, nl, mid, ql, qr, threshold);
        if (res != -1) {
            return res;
        }
        return findFirst(2 * node + 1, mid, nr, ql, qr, threshold);
    }
}
