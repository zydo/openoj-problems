class Solution {
  public:
    bool possibleBipartition(int n, vector<vector<int>> &dislikes) {
        vector<vector<int>> adjacency(n + 1);
        for (auto &d : dislikes) {
            adjacency[d[0]].push_back(d[1]);
            adjacency[d[1]].push_back(d[0]);
        }

        vector<int> color(n + 1, 0); // 0 = uncolored, 1 / -1 = the two groups
        for (int start = 1; start <= n; start++) {
            if (color[start] != 0) {
                continue;
            }
            color[start] = 1;
            deque<int> queue;
            queue.push_back(start);
            while (!queue.empty()) {
                int person = queue.front();
                queue.pop_front();
                for (int neighbor : adjacency[person]) {
                    if (color[neighbor] == 0) {
                        color[neighbor] = -color[person];
                        queue.push_back(neighbor);
                    } else if (color[neighbor] == color[person]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
};
