class Solution {
  public:
    int excavatedRelics(int n, vector<vector<int>> &relics, vector<vector<int>> &digs) {
        // Mark every excavated cell once in a boolean grid, then each
        // rectangle test is a constant-time lookup per cell — digs is never
        // rescanned for an artifact.
        vector<vector<bool>> dug(n, vector<bool>(n, false));
        for (const auto &cell : digs) {
            dug[cell[0]][cell[1]] = true;
        }
        int extracted = 0;
        for (const auto &rect : relics) {
            bool complete = true;
            for (int r = rect[0]; r <= rect[2] && complete; r++) {
                for (int c = rect[1]; c <= rect[3]; c++) {
                    if (!dug[r][c]) {
                        complete = false;
                        break;
                    }
                }
            }
            if (complete) {
                extracted++;
            }
        }
        return extracted;
    }
};
