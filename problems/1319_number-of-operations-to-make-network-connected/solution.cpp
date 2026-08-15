class Solution {
  public:
    int makeConnected(int n, vector<vector<int>> &connections) {
        if ((int)connections.size() < n - 1) {
            return -1;
        }
        vector<int> parent(n);
        iota(parent.begin(), parent.end(), 0);
        int components = n;
        for (auto &c : connections) {
            int ra = find(parent, c[0]);
            int rb = find(parent, c[1]);
            if (ra != rb) {
                parent[ra] = rb;
                components--;
            }
        }
        return components - 1;
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
