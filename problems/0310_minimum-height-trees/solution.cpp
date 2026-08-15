class Solution {
  public:
    vector<int> findMinHeightTrees(int n, vector<vector<int>> &edges) {
        if (n <= 2) {
            vector<int> r(n);
            iota(r.begin(), r.end(), 0);
            return r;
        }
        vector<vector<int>> adjacency(n);
        vector<int> degree(n, 0);
        for (auto &e : edges) {
            int a = e[0], b = e[1];
            adjacency[a].push_back(b);
            adjacency[b].push_back(a);
            degree[a]++;
            degree[b]++;
        }
        deque<int> leaves;
        for (int i = 0; i < n; i++)
            if (degree[i] == 1)
                leaves.push_back(i);
        int remaining = n;
        while (remaining > 2) {
            for (int k = (int)leaves.size(); k > 0; k--) {
                int leaf = leaves.front();
                leaves.pop_front();
                remaining--;
                for (int neighbor : adjacency[leaf]) {
                    degree[neighbor]--;
                    if (degree[neighbor] == 1)
                        leaves.push_back(neighbor);
                }
            }
        }
        vector<int> result(leaves.begin(), leaves.end());
        sort(result.begin(), result.end());
        return result;
    }
};
