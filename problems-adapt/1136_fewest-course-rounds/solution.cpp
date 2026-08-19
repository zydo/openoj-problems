class Solution {
  public:
    int fewestCourseRounds(int n, vector<vector<int>> &precedence) {
        vector<vector<int>> adjacency(n + 1);
        vector<int> indegree(n + 1, 0);
        for (auto &relation : precedence) {
            adjacency[relation[0]].push_back(relation[1]);
            indegree[relation[1]] += 1;
        }
        // round 1: every course with no prerequisites
        queue<int> q;
        for (int i = 1; i <= n; i++) {
            if (indegree[i] == 0) {
                q.push(i);
            }
        }
        int rounds = 0;
        int taken = 0;
        while (!q.empty()) {
            rounds += 1;
            // drain the entire current level as one round; the answer is
            // the longest prerequisite chain, one level per round
            for (int sz = q.size(); sz > 0; sz--) {
                int course = q.front();
                q.pop();
                taken += 1;
                for (int nxt : adjacency[course]) {
                    indegree[nxt] -= 1;
                    // prerequisite count hits zero: ready for next round
                    if (indegree[nxt] == 0) {
                        q.push(nxt);
                    }
                }
            }
        }
        // fewer than n taken means a cycle kept some courses at indegree > 0
        return taken == n ? rounds : -1;
    }
};
