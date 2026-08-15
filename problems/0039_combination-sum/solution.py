from typing import List, Optional


class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        results = []

        def backtrack(start: int, remaining: int, path: List[int]) -> None:
            if remaining == 0:
                results.append(path[:])
                return
            for i in range(start, len(candidates)):
                value = candidates[i]
                if value > remaining:
                    continue
                path.append(value)
                backtrack(i, remaining - value, path)
                path.pop()

        backtrack(0, target, [])
        return results
