from typing import Dict, List, Tuple


class Solution:
    def demolishCrates(self, crates: List[int]) -> int:
        # Memoized interval DP. dfs(l, r, k) is the best score from
        # crates[l..r] when k crates of crates[l]'s color, already removed
        # from outside the interval, sit glued to its left and will join
        # its group.
        n = len(crates)
        memo: Dict[Tuple[int, int, int], int] = {}

        def dfs(l: int, r: int, k: int) -> int:
            if l > r:
                return 0
            # Adjacent same-colored crates never need separate treatment:
            # holding crates[l] until its identical neighbor leaves only
            # grows the eventual group, so the run joins the carry.
            while l < r and crates[l + 1] == crates[l]:
                l += 1
                k += 1
            key = (l, r, k)
            if key in memo:
                return memo[key]
            # Either take crates[l] and its carry now, scoring (k+1)^2...
            best = (k + 1) * (k + 1) + dfs(l + 1, r, 0)
            # ...or hold it: clear crates[l+1..m-1] first, so crates[l]
            # meets the next same-colored crate one richer in the carry.
            for m in range(l + 1, r + 1):
                if crates[m] == crates[l]:
                    best = max(best, dfs(l + 1, m - 1, 0) + dfs(m, r, k + 1))
            memo[key] = best
            return best

        return dfs(0, n - 1, 0)
