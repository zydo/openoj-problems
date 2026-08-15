class Solution {

    public long maxTotalFruits(int[][] fruits, int startPos, int k) {
        int n = fruits.length;
        long[] prefix = new long[n + 1];
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + fruits[i][1];
        }

        long best = 0;
        int left = 0;
        for (int right = 0; right < n; right++) {
            while (
                left < right &&
                windowCost(fruits[left][0], fruits[right][0], startPos) > k
            ) {
                left++;
            }
            if (windowCost(fruits[left][0], fruits[right][0], startPos) <= k) {
                best = Math.max(best, prefix[right + 1] - prefix[left]);
            }
        }
        return best;
    }

    private int windowCost(int leftPos, int rightPos, int startPos) {
        if (startPos <= leftPos) {
            return rightPos - startPos;
        }
        if (startPos >= rightPos) {
            return startPos - leftPos;
        }
        return Math.min(
            2 * (startPos - leftPos) + (rightPos - startPos),
            2 * (rightPos - startPos) + (startPos - leftPos)
        );
    }
}
