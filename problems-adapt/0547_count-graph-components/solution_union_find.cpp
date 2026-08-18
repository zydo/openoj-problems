class Solution {
  public:
    int countComponents(vector<vector<int>> &adjacency) {
        int n = adjacency.size();
        vector<int> parent(n);
        iota(parent.begin(), parent.end(), 0);
        // Path-halving: splice every other node directly under its
        // grandparent, flattening the tree while walking to the root.
        auto find = [&](int x) {
            while (parent[x] != x) {
                parent[x] = parent[parent[x]];
                x = parent[x];
            }
            return x;
        };
        // Every city begins as its own component; only a
        // successful union ever reduces the count.
        int components = n;
        // The matrix is symmetric, so scanning pairs i < j feeds every
        // road to the union exactly once; the diagonal is skipped.
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if (adjacency[i][j] == 1) {
                    int ri = find(i), rj = find(j);
                    // A road joining two distinct roots merges two components;
                    // one whose cities already share a root is redundant.
                    if (ri != rj) {
                        parent[ri] = rj;
                        --components;
                    }
                }
            }
        }
        return components;
    }
};
