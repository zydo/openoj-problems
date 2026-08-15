class Solution {
  public:
    int minimumSemesters(int n, vector<vector<int>> &relations) {
        vector<vector<int>> adjacency(n + 1);
        vector<int> indegree(n + 1, 0);
        for (auto &relation : relations) {
            adjacency[relation[0]].push_back(relation[1]);
            indegree[relation[1]] += 1;
        }
        queue<int> q;
        for (int i = 1; i <= n; i++) {
            if (indegree[i] == 0) {
                q.push(i);
            }
        }
        int semesters = 0;
        int taken = 0;
        while (!q.empty()) {
            semesters += 1;
            for (int sz = q.size(); sz > 0; sz--) {
                int course = q.front();
                q.pop();
                taken += 1;
                for (int nxt : adjacency[course]) {
                    indegree[nxt] -= 1;
                    if (indegree[nxt] == 0) {
                        q.push(nxt);
                    }
                }
            }
        }
        return taken == n ? semesters : -1;
    }
};
