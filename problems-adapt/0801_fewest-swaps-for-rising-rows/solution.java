class Solution {

    public int fewestSwapsForRisingRows(int[] top, int[] bottom) {
        final int INF = Integer.MAX_VALUE / 2;
        int n = top.length;
        // Only two configurations matter per index — pair kept or
        // swapped — and swap starts at 1: swapping index 0 costs one op.
        int keep = 0;
        int swap = 1;
        for (int i = 1; i < n; i++) {
            int nkeep = INF;
            int nswap = INF;
            int a1 = top[i - 1],
                b1 = bottom[i - 1];
            int a2 = top[i],
                b2 = bottom[i];
            // Natural ordering licenses consistent choices: keep
            // follows keep, swap follows swap (paying one more op).
            if (a1 < a2 && b1 < b2) {
                nkeep = Math.min(nkeep, keep);
                nswap = Math.min(nswap, swap + 1);
            }
            // Crossed ordering licenses flipping the choice at i
            // relative to i-1.
            if (a1 < b2 && b1 < a2) {
                nkeep = Math.min(nkeep, swap);
                nswap = Math.min(nswap, keep + 1);
            }
            // Both conditions may hold; solvability guarantees one does.
            keep = nkeep;
            swap = nswap;
        }
        return Math.min(keep, swap);
    }
}
