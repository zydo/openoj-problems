import java.util.Arrays;

class Solution {

    public int maxDistance(int[] position, int m) {
        Arrays.sort(position);

        int lo = 1;
        int hi = position[position.length - 1] - position[0];
        while (lo < hi) {
            int mid = lo + (hi - lo + 1) / 2;
            if (feasible(position, m, mid)) {
                lo = mid;
            } else {
                hi = mid - 1;
            }
        }
        return lo;
    }

    private boolean feasible(int[] position, int m, int distance) {
        int count = 1;
        int last = position[0];
        for (int i = 1; i < position.length; i++) {
            if (position[i] - last >= distance) {
                count++;
                last = position[i];
                if (count >= m) {
                    return true;
                }
            }
        }
        return count >= m;
    }
}
