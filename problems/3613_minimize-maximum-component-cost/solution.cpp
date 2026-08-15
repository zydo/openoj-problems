class Solution {
  public:
    int minCost(int n, vector<vector<int>> &edges, int k) {
        if (k >= n)
            return 0;

        auto find = [](vector<int> &parent, int x) {
            while (parent[x] != x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };

        auto feasible = [&](int t) {
            vector<int> parent(n);
            for (int i = 0; i < n; i++)
                parent[i] = i;
            int comps = n;
            for (auto &e : edges) {
                if (e[2] <= t) {
                    int ru = find(parent, e[0]), rv = find(parent, e[1]);
                    if (ru != rv) {
                        parent[ru] = rv;
                        comps--;
                    }
                }
            }
            return comps <= k;
        };

        if (feasible(0))
            return 0;
        set<int> weightSet;
        for (auto &e : edges)
            weightSet.insert(e[2]);
        vector<int> weights(weightSet.begin(), weightSet.end());
        int lo = 0, hi = (int)weights.size() - 1;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (feasible(weights[mid]))
                hi = mid;
            else
                lo = mid + 1;
        }
        return weights[lo];
    }
};
