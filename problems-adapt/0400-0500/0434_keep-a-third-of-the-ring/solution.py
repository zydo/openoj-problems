class Solution:
    def bestRingPicks(self, ring: list[int]) -> int:
        k = len(ring) // 3

        def rob(arr, picks):
            length = len(arr)
            # dp[i][j] = best value using the first i entries, picking exactly j,
            # with no two chosen adjacent.
            dp = [[-1] * (picks + 1) for _ in range(length + 1)]
            dp[0][0] = 0
            for i in range(1, length + 1):
                for j in range(picks + 1):
                    dp[i][j] = dp[i - 1][j]
                    if j >= 1:
                        base = dp[i - 2][j - 1] if i >= 2 else (0 if j == 1 else -1)
                        if base >= 0 and base + arr[i - 1] > dp[i][j]:
                            dp[i][j] = base + arr[i - 1]
            return dp[length][picks]

        if len(ring) == 1:
            return ring[0]
        return max(rob(ring[:-1], k), rob(ring[1:], k))
