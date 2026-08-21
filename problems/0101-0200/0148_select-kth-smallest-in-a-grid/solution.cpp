class Solution {
  public:
    int selectKthSmallest(vector<vector<int>> &grid, int k) {
        int n = grid.size();
        long long lo = grid[0][0], hi = grid[n - 1][n - 1];
        while (lo < hi) {
            long long mid = lo + (hi - lo) / 2; // floor of (lo + hi) / 2
            if (countLe(grid, mid) >= k) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        return (int)lo;
    }

  private:
    // Staircase walk from bottom-left: elements <= x.
    long long countLe(vector<vector<int>> &grid, long long x) {
        int n = grid.size();
        long long count = 0;
        int row = n - 1, col = 0;
        while (row >= 0 && col < n) {
            if (grid[row][col] <= x) {
                count += row + 1;
                col++;
            } else {
                row--;
            }
        }
        return count;
    }
};
