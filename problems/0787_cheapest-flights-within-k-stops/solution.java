class Solution {

    public int findCheapestPrice(
        int n,
        int[][] flights,
        int src,
        int dst,
        int k
    ) {
        final int INF = Integer.MAX_VALUE / 2;
        int[] dist = new int[n];
        java.util.Arrays.fill(dist, INF);
        dist[src] = 0;
        for (int i = 0; i < k + 1; i++) {
            int[] ndist = dist.clone();
            boolean changed = false;
            for (int[] flight : flights) {
                int f = flight[0],
                    t = flight[1],
                    price = flight[2];
                if (dist[f] + price < ndist[t]) {
                    ndist[t] = dist[f] + price;
                    changed = true;
                }
            }
            dist = ndist;
            if (!changed) break;
        }
        return dist[dst] >= INF ? -1 : dist[dst];
    }
}
