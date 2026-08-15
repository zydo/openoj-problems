class Solution {
  public:
    int leastBricks(vector<vector<int>> &wall) {
        unordered_map<int, int> edgeCounts;
        for (const auto &row : wall) {
            long long position = 0;
            for (size_t i = 0; i + 1 < row.size(); i++) {
                position += row[i];
                edgeCounts[(int)position]++;
            }
        }
        int bestEdges = 0;
        for (const auto &[position, count] : edgeCounts) {
            bestEdges = max(bestEdges, count);
        }
        return (int)wall.size() - bestEdges;
    }
};
