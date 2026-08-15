class Solution {
  public:
    int slidingPuzzle(vector<vector<int>> &board) {
        static const string TARGET = "123450";
        static const int NEIGHBORS[6][3] = {{1, 3, -1}, {0, 2, 4}, {1, 5, -1},
                                            {0, 4, -1}, {3, 5, 1}, {2, 4, -1}};
        string start;
        for (const auto &row : board) {
            for (int v : row) {
                start.push_back('0' + v);
            }
        }
        if (start == TARGET)
            return 0;
        unordered_set<string> visited;
        visited.insert(start);
        queue<pair<string, int>> q;
        q.push({start, 0});
        while (!q.empty()) {
            auto [state, moves] = q.front();
            q.pop();
            size_t zero = state.find('0');
            for (int i = 0; i < 3; i++) {
                int nxt = NEIGHBORS[zero][i];
                if (nxt < 0)
                    continue;
                string newState = state;
                swap(newState[zero], newState[nxt]);
                if (newState == TARGET)
                    return moves + 1;
                if (visited.insert(newState).second) {
                    q.push({newState, moves + 1});
                }
            }
        }
        return -1;
    }
};
