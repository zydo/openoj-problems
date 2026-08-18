class Solution {
  public:
    int countComponents(vector<vector<int>> &adjacency) {
        int n = adjacency.size();
        vector<char> visited(n, 0);
        int components = 0;
        vector<int> stack;
        for (int start = 0; start < n; start++) {
            if (visited[start]) {
                continue;
            }
            // An unvisited city during the sweep starts a new component;
            // this one traversal absorbs exactly one component.
            components++;
            visited[start] = 1;
            stack.push_back(start);
            while (!stack.empty()) {
                int city = stack.back();
                stack.pop_back();
                for (int other = 0; other < n; other++) {
                    if (adjacency[city][other] == 1 && !visited[other]) {
                        // Mark at push time so no city is stacked twice;
                        // membership is by visitation, so self-loops and the
                        // symmetric matrix never double count.
                        visited[other] = 1;
                        stack.push_back(other);
                    }
                }
            }
        }
        return components;
    }
};
