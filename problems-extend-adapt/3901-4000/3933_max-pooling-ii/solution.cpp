#include <algorithm>
#include <utility>
#include <vector>

using namespace std;

class Solution {
  public:
    int maxPoolII(vector<vector<int>> &grid) {
        int rows = grid.size(), columns = grid[0].size();
        vector<vector<pair<int, int>>> positions(201);
        for (int row = 0; row < rows; ++row) {
            for (int column = 0; column < columns; ++column) {
                if (grid[row][column] != 0)
                    positions[grid[row][column]].push_back({row, column});
            }
        }
        int answer = 0;
        for (int value = 1; value <= 200; ++value) {
            if (positions[value].empty())
                continue;
            vector<vector<int>> prefix(rows + 1, vector<int>(columns + 1));
            for (int row = 0; row < rows; ++row) {
                int running = 0;
                for (int column = 0; column < columns; ++column) {
                    running += grid[row][column] > value;
                    prefix[row + 1][column + 1] = prefix[row][column + 1] + running;
                }
            }
            for (auto [row, column] : positions[value]) {
                int top = max(0, row - value), bottom = min(rows - 1, row + value);
                int left = max(0, column - value), right = min(columns - 1, column + value);
                int greater = prefix[bottom + 1][right + 1] - prefix[top][right + 1] - prefix[bottom + 1][left] +
                              prefix[top][left];
                for (int cornerRow : {row - value, row + value}) {
                    for (int cornerColumn : {column - value, column + value}) {
                        if (cornerRow >= 0 && cornerRow < rows && cornerColumn >= 0 && cornerColumn < columns &&
                            grid[cornerRow][cornerColumn] > value)
                            --greater;
                    }
                }
                if (greater == 0)
                    ++answer;
            }
        }
        return answer;
    }
};
