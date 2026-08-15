import java.util.Arrays;

class Solution {

    public int maximumTastiness(int[] price, int k) {
        int[] p = price.clone();
        Arrays.sort(p);
        int lo = 0,
            hi = p[p.length - 1] - p[0];
        while (lo < hi) {
            int mid = lo + (hi - lo + 1) / 2;
            if (feasible(p, k, mid)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

    private boolean feasible(int[] p, int k, int x) {
        int count = 1;
        int last = p[0];
        for (int i = 1; i < p.length; i++) {
            if (p[i] - last >= x) {
                count++;
                last = p[i];
            }
        }
        return count >= k;
    }
}
