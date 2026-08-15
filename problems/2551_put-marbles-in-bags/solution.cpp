class Solution {
  public:
    long long putMarbles(vector<int> &weights, int k) {
        if (k == 1) {
            return 0;
        }
        int n = weights.size();
        vector<long long> adj(n - 1);
        for (int i = 0; i + 1 < n; i++) {
            adj[i] = (long long)weights[i] + weights[i + 1];
        }
        sort(adj.begin(), adj.end());
        int m = k - 1;
        long long ans = 0;
        for (int i = 0; i < m; i++) {
            ans += adj[n - 2 - i] - adj[i];
        }
        return ans;
    }
};
