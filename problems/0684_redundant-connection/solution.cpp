class Solution {
    unordered_map<int, int> parent;

  public:
    vector<int> findRedundantConnection(vector<vector<int>> &edges) {
        parent.clear();
        for (const auto &edge : edges) {
            if (!myUnion(edge[0], edge[1])) {
                return edge;
            }
        }
        return {};
    }

  private:
    int find(int node) {
        int root = node;
        while (parent[root] != root) {
            root = parent[root];
        }
        while (parent[node] != root) {
            int next = parent[node];
            parent[node] = root;
            node = next;
        }
        return root;
    }

    bool myUnion(int a, int b) {
        if (parent.find(a) == parent.end()) {
            parent[a] = a;
        }
        if (parent.find(b) == parent.end()) {
            parent[b] = b;
        }
        int ra = find(a);
        int rb = find(b);
        if (ra == rb) {
            return false;
        }
        parent[ra] = rb;
        return true;
    }
};
