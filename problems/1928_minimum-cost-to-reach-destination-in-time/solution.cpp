class Solution {
  public:
    int minCost(int maxTime, vector<vector<int>> &edges, vector<int> &passingFees) {
        int n = passingFees.size();
        const int INF = INT_MAX / 2;
        vector<vector<int>> layers(maxTime + 1);
        vector<int> start(n, INF);
        start[0] = passingFees[0];
        layers[0] = start;
        for (int t = 1; t <= maxTime; ++t) {
            vector<int> cur(n, INF);
            for (auto &e : edges) {
                int x = e[0], y = e[1], dt = e[2];
                if (dt > t)
                    continue;
                vector<int> &prev = layers[t - dt];
                if (prev[x] < INF && prev[x] + passingFees[y] < cur[y])
                    cur[y] = prev[x] + passingFees[y];
                if (prev[y] < INF && prev[y] + passingFees[x] < cur[x])
                    cur[x] = prev[y] + passingFees[x];
            }
            layers[t] = cur;
        }
        int best = INF;
        for (auto &layer : layers) {
            best = min(best, layer[n - 1]);
        }
        return best < INF ? best : -1;
    }
};
