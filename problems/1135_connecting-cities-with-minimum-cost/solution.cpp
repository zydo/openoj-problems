class Solution {
  public:
    int minimumCost(int n, vector<vector<int>> &connections) {
        vector<vector<int>> conns(connections);
        sort(conns.begin(), conns.end(),
             [](const vector<int> &a, const vector<int> &b) { return a[2] < b[2]; });
        vector<int> parent(n + 1);
        iota(parent.begin(), parent.end(), 0);
        int total = 0;
        int components = n;
        for (const auto &c : conns) {
            int rx = find(parent, c[0]);
            int ry = find(parent, c[1]);
            if (rx != ry) {
                parent[rx] = ry;
                total += c[2];
                components--;
                if (components == 1) {
                    return total;
                }
            }
        }
        return -1;
    }

  private:
    int find(vector<int> &parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
};
