class Solution {

    public int maxScore(int[] cardPoints, int k) {
        int n = cardPoints.length;
        long total = 0;
        for (int value : cardPoints) {
            total += value;
        }
        int window = n - k;
        long current = 0;
        for (int i = 0; i < window; i++) {
            current += cardPoints[i];
        }
        long best = current;
        for (int i = window; i < n; i++) {
            current += cardPoints[i] - cardPoints[i - window];
            if (current < best) {
                best = current;
            }
        }
        return (int) (total - best);
    }
}
