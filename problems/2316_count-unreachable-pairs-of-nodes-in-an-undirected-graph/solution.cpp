class Solution {
  public:
    long long countPairs(int n, vector<vector<int>> &edges) {
        vector<int> parent(n), sz(n, 1);
        for (int i = 0; i < n; i++)
            parent[i] = i;

        for (auto &e : edges) {
            int ra = find(parent, e[0]);
            int rb = find(parent, e[1]);
            if (ra != rb) {
                if (sz[ra] < sz[rb])
                    swap(ra, rb);
                parent[rb] = ra;
                sz[ra] += sz[rb];
            }
        }

        long long reachable = 0;
        for (int v = 0; v < n; v++) {
            if (find(parent, v) == v) {
                reachable += (long long)sz[v] * (sz[v] - 1) / 2;
            }
        }
        return (long long)n * (n - 1) / 2 - reachable;
    }

  private:
    int find(vector<int> &parent, int x) {
        int root = x;
        while (parent[root] != root) {
            root = parent[root];
        }
        while (parent[x] != root) {
            int next = parent[x];
            parent[x] = root;
            x = next;
        }
        return root;
    }
};
