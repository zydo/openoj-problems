class Solution {
  public:
    int countComponents(int n, vector<vector<int>> &edges) {
        vector<int> parent(n);
        iota(parent.begin(), parent.end(), 0);
        auto find = [&](int x) {
            while (parent[x] != x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };
        int count = n;
        for (const auto &e : edges) {
            int ra = find(e[0]), rb = find(e[1]);
            if (ra != rb) {
                parent[ra] = rb;
                --count;
            }
        }
        return count;
    }
};
