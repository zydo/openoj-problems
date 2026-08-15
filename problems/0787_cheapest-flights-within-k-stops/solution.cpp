class Solution {
  public:
    int findCheapestPrice(int n, vector<vector<int>> &flights, int src, int dst, int k) {
        const int INF = INT_MAX / 2;
        vector<int> dist(n, INF);
        dist[src] = 0;
        for (int i = 0; i < k + 1; i++) {
            vector<int> ndist = dist;
            bool changed = false;
            for (const auto &flight : flights) {
                int f = flight[0], t = flight[1], price = flight[2];
                if (dist[f] + price < ndist[t]) {
                    ndist[t] = dist[f] + price;
                    changed = true;
                }
            }
            dist = ndist;
            if (!changed)
                break;
        }
        return dist[dst] >= INF ? -1 : dist[dst];
    }
};
