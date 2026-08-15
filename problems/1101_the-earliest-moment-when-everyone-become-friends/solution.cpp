class Solution {
  public:
    int earliestAcq(vector<vector<int>> &logs, int n) {
        vector<vector<int>> sorted(logs);
        sort(sorted.begin(), sorted.end(),
             [](const vector<int> &a, const vector<int> &b) { return a[0] < b[0]; });
        vector<int> parent(n);
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        auto find = [&](int a) {
            while (parent[a] != a) {
                parent[a] = parent[parent[a]];
                a = parent[a];
            }
            return a;
        };
        int components = n;
        for (const auto &log : sorted) {
            int rx = find(log[1]);
            int ry = find(log[2]);
            if (rx != ry) {
                parent[rx] = ry;
                components--;
                if (components == 1) {
                    return log[0];
                }
            }
        }
        return -1;
    }
};
