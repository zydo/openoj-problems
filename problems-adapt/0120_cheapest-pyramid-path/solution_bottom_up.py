from typing import List, Optional


class Solution:
    def cheapestPath(self, rows: List[List[int]]) -> int:
        # dp[i] = minimum path sum from column i of the current row to the
        # bottom. The last row seeds it directly: a path starting there is
        # just that cell.
        dp = list(rows[-1])
        # Work bottom-up: every cell has exactly the two children i and i+1
        # below, so no ragged-edge special cases like a top-down sweep.
        for row in range(len(rows) - 2, -1, -1):
            for i in range(len(rows[row])):
                # Ascending i is safe in place: dp[i+1] still holds the row
                # below's value when read. dp shrinks to dp[0] at the apex.
                dp[i] = rows[row][i] + min(dp[i], dp[i + 1])
        return dp[0]
