class Solution {
  public:
    vector<int> maxHammingDistances(vector<int> &nums, int m) {
        int size = 1 << m;
        int full = size - 1;
        vector<int> dist(size, size + 1);
        queue<int> q;
        for (int value : nums) {
            if (dist[value] != 0) {
                dist[value] = 0;
                q.push(value);
            }
        }
        while (!q.empty()) {
            int v = q.front();
            q.pop();
            int nd = dist[v] + 1;
            for (int bit = 0; bit < m; bit++) {
                int u = v ^ (1 << bit);
                if (dist[u] > nd) {
                    dist[u] = nd;
                    q.push(u);
                }
            }
        }
        vector<int> result;
        result.reserve(nums.size());
        for (int x : nums)
            result.push_back(m - dist[full ^ x]);
        return result;
    }
};
