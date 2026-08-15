class Solution {
  public:
    int findCircleNum(vector<vector<int>> &isConnected) {
        int n = isConnected.size();
        vector<char> visited(n, 0);
        int provinces = 0;
        vector<int> stack;
        for (int start = 0; start < n; start++) {
            if (visited[start]) {
                continue;
            }
            provinces++;
            visited[start] = 1;
            stack.push_back(start);
            while (!stack.empty()) {
                int city = stack.back();
                stack.pop_back();
                for (int other = 0; other < n; other++) {
                    if (isConnected[city][other] == 1 && !visited[other]) {
                        visited[other] = 1;
                        stack.push_back(other);
                    }
                }
            }
        }
        return provinces;
    }
};
