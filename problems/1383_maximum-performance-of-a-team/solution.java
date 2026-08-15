import java.util.PriorityQueue;

class Solution {

    public int maxPerformance(int n, int[] speed, int[] efficiency, int k) {
        final long MOD = 1000000007L;
        int[][] engineers = new int[n][2];
        for (int i = 0; i < n; i++) {
            engineers[i][0] = efficiency[i];
            engineers[i][1] = speed[i];
        }
        java.util.Arrays.sort(engineers, (a, b) -> {
            if (b[0] != a[0]) {
                return b[0] - a[0];
            }
            return b[1] - a[1];
        });
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        long speedSum = 0;
        long best = 0;
        for (int[] e : engineers) {
            pq.add(e[1]);
            speedSum += e[1];
            if (pq.size() > k) {
                speedSum -= pq.poll();
            }
            long perf = speedSum * e[0];
            if (perf > best) {
                best = perf;
            }
        }
        return (int) (best % MOD);
    }
}
