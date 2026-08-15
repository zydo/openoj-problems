class Solution {
  public:
    vector<int> numIslands2(int m, int n, vector<vector<int>> &positions) {
        vector<int> parent(m * n);
        vector<int> size(m * n, 1);
        vector<bool> land(m * n, false);
        for (int i = 0; i < m * n; i++) {
            parent[i] = i;
        }
        vector<int> answer;
        answer.reserve(positions.size());
        int count = 0;
        int dr[] = {1, -1, 0, 0};
        int dc[] = {0, 0, 1, -1};
        for (auto &pos : positions) {
            int r = pos[0], c = pos[1];
            int cell = r * n + c;
            if (land[cell]) {
                answer.push_back(count);
                continue;
            }
            land[cell] = true;
            count++;
            for (int k = 0; k < 4; k++) {
                int nr = r + dr[k], nc = c + dc[k];
                if (nr < 0 || nr >= m || nc < 0 || nc >= n || !land[nr * n + nc]) {
                    continue;
                }
                int ra = find(parent, cell);
                int rb = find(parent, nr * n + nc);
                if (ra != rb) {
                    if (size[ra] < size[rb]) {
                        swap(ra, rb);
                    }
                    parent[rb] = ra;
                    size[ra] += size[rb];
                    count--;
                }
            }
            answer.push_back(count);
        }
        return answer;
    }

  private:
    int find(vector<int> &parent, int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
};
