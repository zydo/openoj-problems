class Solution {
  public:
    vector<int> findOrder(int numCourses, vector<vector<int>> &prerequisites) {
        vector<vector<int>> adjacency(numCourses);
        vector<int> indegree(numCourses, 0);
        for (const auto &pair : prerequisites) {
            int course = pair[0];
            int prereq = pair[1];
            adjacency[prereq].push_back(course);
            indegree[course] += 1;
        }
        queue<int> q;
        for (int i = 0; i < numCourses; i++) {
            if (indegree[i] == 0) {
                q.push(i);
            }
        }
        vector<int> order;
        order.reserve(numCourses);
        while (!q.empty()) {
            int node = q.front();
            q.pop();
            order.push_back(node);
            for (int nxt : adjacency[node]) {
                if (--indegree[nxt] == 0) {
                    q.push(nxt);
                }
            }
        }
        if ((int)order.size() == numCourses) {
            return order;
        }
        return {};
    }
};
