class Solution {
  public:
    bool validTree(int n, vector<vector<int>> &edges) {
        if ((int)edges.size() != n - 1) {
            return false;
        }
        vector<int> parent(n);
        for (int i = 0; i < n; i++) {
            parent[i] = i;
        }
        for (auto &e : edges) {
            int ra = find(parent, e[0]);
            int rb = find(parent, e[1]);
            if (ra == rb) {
                return false;
            }
            parent[ra] = rb;
        }
        return true;
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
