class Solution:
    def minDistance(self, source: str, target: str) -> int:
        # dp[i][j] = min operations turning the first i chars of source into
        # the first j chars of target. Only the last two table rows are kept,
        # since row i reads only row i-1 and its own left neighbor.
        m, n = len(source), len(target)
        # Row 0: converting the empty prefix costs j insertions.
        prev = list(range(n + 1))
        for i in range(1, m + 1):
            # Column 0: converting an i-char prefix to empty costs i deletions.
            curr = [i] + [0] * n
            for j in range(1, n + 1):
                if source[i - 1] == target[j - 1]:
                    # Last chars align for free: inherit the diagonal.
                    curr[j] = prev[j - 1]
                else:
                    # One paid operation must fix the mismatch; each choice
                    # covers a distinct final move, so the min is exact.
                    # Replace inherits prev[j-1], delete drops source[i-1]
                    # and inherits prev[j], insert appends target[j-1] and
                    # inherits curr[j-1] (one fewer char of target to match).
                    curr[j] = 1 + min(prev[j - 1], prev[j], curr[j - 1])
            prev = curr
        return prev[n]
