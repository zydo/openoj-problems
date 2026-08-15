class Solution {
  public:
    int maximumInvitations(vector<int> &favorite) {
        int n = favorite.size();
        vector<int> indeg(n, 0);
        for (int f : favorite) {
            indeg[f]++;
        }

        vector<int> depth(n, 1);
        vector<int> queue;
        queue.reserve(n);
        for (int i = 0; i < n; i++) {
            if (indeg[i] == 0) {
                queue.push_back(i);
            }
        }
        for (size_t head = 0; head < queue.size(); ++head) {
            int u = queue[head];
            int v = favorite[u];
            if (depth[u] + 1 > depth[v]) {
                depth[v] = depth[u] + 1;
            }
            if (--indeg[v] == 0) {
                queue.push_back(v);
            }
        }

        int maxCycle = 0;
        int pairSum = 0;
        vector<char> visited(n, 0);
        for (int i = 0; i < n; i++) {
            if (indeg[i] > 0 && !visited[i]) {
                int cycleLen = 0;
                int cur = i;
                while (!visited[cur]) {
                    visited[cur] = 1;
                    cycleLen++;
                    cur = favorite[cur];
                }
                if (cycleLen == 2) {
                    pairSum += depth[i] + depth[favorite[i]];
                } else if (cycleLen > maxCycle) {
                    maxCycle = cycleLen;
                }
            }
        }
        return max(maxCycle, pairSum);
    }
};
