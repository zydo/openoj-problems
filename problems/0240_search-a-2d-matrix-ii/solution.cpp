class Solution {
  public:
    bool searchMatrix(vector<vector<int>> &matrix, int target) {
        if (matrix.empty() || matrix[0].empty())
            return false;
        int row = 0, col = matrix[0].size() - 1;
        while (row < (int)matrix.size() && col >= 0) {
            int value = matrix[row][col];
            if (value == target)
                return true;
            if (value > target)
                --col;
            else
                ++row;
        }
        return false;
    }
};
