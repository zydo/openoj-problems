class Solution {
  public:
    vector<int> eventualSafeNodes(vector<vector<int>> &graph) {
        int n = graph.size();
        vector<int> outdeg(n);
        vector<vector<int>> radj(n);
        for (int u = 0; u < n; u++) {
            outdeg[u] = graph[u].size();
            for (int v : graph[u]) {
                radj[v].push_back(u);
            }
        }
        deque<int> queue;
        for (int i = 0; i < n; i++) {
            if (outdeg[i] == 0) {
                queue.push_back(i);
            }
        }
        vector<bool> safe(n, false);
        while (!queue.empty()) {
            int u = queue.front();
            queue.pop_front();
            safe[u] = true;
            for (int v : radj[u]) {
                outdeg[v]--;
                if (outdeg[v] == 0) {
                    queue.push_back(v);
                }
            }
        }
        vector<int> result;
        for (int i = 0; i < n; i++) {
            if (safe[i]) {
                result.push_back(i);
            }
        }
        return result;
    }
};
