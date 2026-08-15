class Solution {

    public int minSpeedOnTime(int[] dist, double hour) {
        int n = dist.length;
        long H = Math.round(hour * 100.0); // hour has at most two decimals
        long last = 100L * dist[n - 1];

        long lo = 1,
            hi = 10000000L;
        if (!onTime(dist, H, last, hi)) return -1;
        while (lo < hi) {
            long mid = (lo + hi) / 2;
            if (onTime(dist, H, last, mid)) hi = mid;
            else lo = mid + 1;
        }
        return (int) lo;
    }

    private boolean onTime(int[] dist, long H, long last, long speed) {
        long c = 0;
        for (int i = 0; i + 1 < dist.length; i++) {
            c += (dist[i] + speed - 1) / speed;
        }
        long budget = H - 100 * c;
        if (budget < 0) return false;
        return budget * speed >= last;
    }
}
