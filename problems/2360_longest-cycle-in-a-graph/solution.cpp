class Solution {
  public:
    int longestCycle(vector<int> &edges) {
        int n = (int)edges.size();
        vector<int> color(n, 0), step(n, 0);
        int timer = 1;
        int best = -1;
        for (int start = 0; start < n; start++) {
            if (color[start])
                continue;
            int node = start;
            vector<int> path;
            while (node != -1 && color[node] == 0) {
                color[node] = 1;
                step[node] = timer;
                timer += 1;
                path.push_back(node);
                node = edges[node];
            }
            if (node != -1 && color[node] == 1) {
                best = max(best, timer - step[node]);
            }
            for (int v : path)
                color[v] = 2;
        }
        return best;
    }
};
