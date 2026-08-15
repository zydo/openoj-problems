class Solution {
  public:
    long long maxScore(vector<vector<int>> &edges) {
        int n = (int)edges.size();
        if (n == 1)
            return 0;
        vector<vector<int>> children(n);
        for (int i = 1; i < n; i++) {
            children[edges[i][0]].push_back(i);
        }
        vector<int> order;
        order.reserve(n);
        vector<int> stack;
        stack.push_back(0);
        while (!stack.empty()) {
            int u = stack.back();
            stack.pop_back();
            order.push_back(u);
            for (int c : children[u])
                stack.push_back(c);
        }
        vector<long long> dp0(n, 0), dp1(n, 0);
        for (int oi = (int)order.size() - 1; oi >= 0; oi--) {
            int u = order[oi];
            long long base = 0, bestGain = 0;
            for (int c : children[u]) {
                long long w = edges[c][1];
                base += dp0[c];
                long long gain = dp1[c] + w - dp0[c];
                if (gain > bestGain)
                    bestGain = gain;
            }
            dp0[u] = base + bestGain;
            dp1[u] = base;
        }
        return dp0[0];
    }
};
