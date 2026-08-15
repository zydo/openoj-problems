class Solution {
  public:
    vector<int> maxPoints(vector<vector<int>> &grid, vector<int> &queries) {
        int m = grid.size(), n = grid[0].size();
        int qlen = queries.size();
        vector<int> order(qlen);
        for (int i = 0; i < qlen; i++)
            order[i] = i;
        sort(order.begin(), order.end(), [&](int a, int b) { return queries[a] < queries[b]; });
        vector<int> answer(qlen, 0);
        vector<vector<bool>> visited(m, vector<bool>(n, false));
        visited[0][0] = true;
        typedef tuple<int, int, int> Cell;
        priority_queue<Cell, vector<Cell>, greater<Cell>> heap;
        heap.push({grid[0][0], 0, 0});
        int count = 0;
        int dr[] = {1, -1, 0, 0};
        int dc[] = {0, 0, 1, -1};
        for (int idx : order) {
            int q = queries[idx];
            while (!heap.empty() && get<0>(heap.top()) < q) {
                auto [val, r, c] = heap.top();
                heap.pop();
                count += 1;
                for (int d = 0; d < 4; d++) {
                    int nr = r + dr[d], nc = c + dc[d];
                    if (0 <= nr && nr < m && 0 <= nc && nc < n && !visited[nr][nc]) {
                        visited[nr][nc] = true;
                        heap.push({grid[nr][nc], nr, nc});
                    }
                }
            }
            answer[idx] = count;
        }
        return answer;
    }
};
