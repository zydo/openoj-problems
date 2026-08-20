class Solution {

    public int[] rankedPrimeFraction(int[] values, int rank) {
        int n = values.length;
        double lo = 0.0,
            hi = 1.0;
        int[] ans = { values[0], values[n - 1] };
        // Binary search on the fraction value; count fractions <= mid.
        for (int it = 0; it < 50; it++) {
            double mid = (lo + hi) / 2.0;
            int count = 0;
            double best = 0.0;
            int[] bestPair = { values[0], values[n - 1] };
            int j = 1;
            for (int i = 0; i < n - 1; i++) {
                while (j < n && values[i] > mid * values[j]) {
                    j += 1;
                }
                count += n - j;
                if (j < n) {
                    double val = (double) values[i] / values[j];
                    if (val > best) {
                        best = val;
                        bestPair[0] = values[i];
                        bestPair[1] = values[j];
                    }
                }
            }
            if (count >= rank) {
                hi = mid;
                ans = bestPair.clone();
            } else {
                lo = mid;
            }
        }
        return ans;
    }
}
