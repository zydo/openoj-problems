from typing import List, Optional


class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
        total = sum(matchsticks)
        if total % 4 != 0:
            return False
        side = total // 4
        sticks = sorted(matchsticks, reverse=True)
        if not sticks or sticks[0] > side:
            return False
        sides = [0, 0, 0, 0]

        def dfs(i):
            if i == len(sticks):
                return sides[0] == sides[1] == sides[2] == sides[3] == side
            value = sticks[i]
            tried = set()
            for j in range(4):
                if sides[j] in tried:
                    continue
                tried.add(sides[j])
                if sides[j] + value <= side:
                    sides[j] += value
                    if dfs(i + 1):
                        return True
                    sides[j] -= value
            return False

        return dfs(0)
