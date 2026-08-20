class Solution {

    public double combinedMedian(int[] first, int[] second) {
        // Keep first as the shorter array: smaller search space, and the
        // partner cut j is guaranteed to land inside [0, n].
        if (first.length > second.length) {
            int[] t = first;
            first = second;
            second = t;
        }
        int m = first.length,
            n = second.length;
        int total = m + n;
        int half = total / 2;
        int lo = 0,
            hi = m;
        while (true) {
            // Binary-search the cut: i = elements first gives to the left
            // half; the cut in second is then forced by the half's size.
            int i = (lo + hi) >>> 1;
            int j = half - i;
            // Sentinels make edge cuts well-defined: a cut at 0 or past the
            // end needs no special casing.
            long aLeft = i > 0 ? first[i - 1] : Long.MIN_VALUE;
            long aRight = i < m ? first[i] : Long.MAX_VALUE;
            long bLeft = j > 0 ? second[j - 1] : Long.MIN_VALUE;
            long bRight = j < n ? second[j] : Long.MAX_VALUE;
            // Both arrays are sorted, so comparing across the cut suffices:
            // everything on the left is <= everything on the right.
            if (aLeft <= bRight && bLeft <= aRight) {
                if (total % 2 == 1) {
                    // Odd total: the left half was made the smaller side.
                    return (double) Math.min(aRight, bRight);
                }
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2.0;
            }
            if (aLeft > bRight) {
                // first is contributing too many elements to the left half.
                hi = i - 1;
            } else {
                lo = i + 1;
            }
        }
    }
}
