class Solution:
    def longestSharedRun(self, first: list[int], second: list[int]) -> int:
        m, n = len(first), len(second)
        # dp[j] = longest common run starting exactly at first[i+1], second[j];
        # sweeping i downward keeps row i+1 available when row i is computed.
        dp = [0] * (n + 1)
        best = 0
        for i in range(m - 1, -1, -1):
            new = [0] * (n + 1)
            for j in range(n - 1, -1, -1):
                if first[i] == second[j]:
                    # Match extends the run starting at (i+1, j+1); a mismatch
                    # leaves 0 — no shared subarray starts there.
                    new[j] = dp[j + 1] + 1
                    if new[j] > best:
                        best = new[j]
            # Roll: only the previous row is ever read.
            dp = new
        return best
