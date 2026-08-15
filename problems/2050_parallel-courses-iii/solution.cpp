class Solution {
  public:
    int minimumTime(int n, vector<vector<int>> &relations, vector<int> &time) {
        vector<vector<int>> adjacency(n + 1);
        vector<int> indegree(n + 1, 0);
        for (auto &relation : relations) {
            adjacency[relation[0]].push_back(relation[1]);
            indegree[relation[1]] += 1;
        }
        // finish[i] = earliest month at which course i completes.
        vector<int> finish(n + 1, 0);
        queue<int> q;
        for (int i = 1; i <= n; i++) {
            if (indegree[i] == 0) {
                finish[i] = time[i - 1];
                q.push(i);
            }
        }
        int answer = 0;
        while (!q.empty()) {
            int course = q.front();
            q.pop();
            answer = max(answer, finish[course]);
            for (int nxt : adjacency[course]) {
                finish[nxt] = max(finish[nxt], finish[course] + time[nxt - 1]);
                indegree[nxt] -= 1;
                if (indegree[nxt] == 0) {
                    q.push(nxt);
                }
            }
        }
        return answer;
    }
};
