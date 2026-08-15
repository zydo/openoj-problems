class Solution {
  public:
    vector<vector<int>> allPathsSourceTarget(vector<vector<int>> &graph) {
        int n = graph.size();
        int target = n - 1;
        vector<vector<int>> paths;
        vector<int> path{0};

        function<void(int)> dfs = [&](int node) {
            if (node == target) {
                paths.push_back(path);
                return;
            }
            for (int nxt : graph[node]) {
                path.push_back(nxt);
                dfs(nxt);
                path.pop_back();
            }
        };

        dfs(0);
        return paths;
    }
};
