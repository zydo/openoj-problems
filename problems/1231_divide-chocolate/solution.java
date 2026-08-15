class Solution {

    public int maximizeSweetness(int[] sweetness, int k) {
        long total = 0;
        for (int value : sweetness) total += value;

        long lo = 1;
        long hi = total / (k + 1);
        long best = 0;
        while (lo <= hi) {
            long mid = (lo + hi) / 2;
            if (piecesAtLeast(sweetness, mid) >= k + 1) {
                best = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        return (int) best;
    }

    private int piecesAtLeast(int[] sweetness, long target) {
        int count = 0;
        long current = 0;
        for (int value : sweetness) {
            current += value;
            if (current >= target) {
                count += 1;
                current = 0;
            }
        }
        return count;
    }
}
