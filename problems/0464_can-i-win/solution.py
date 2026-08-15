from typing import List, Optional


class Solution:
    def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:
        if desiredTotal <= 0:
            return True
        if maxChoosableInteger * (maxChoosableInteger + 1) // 2 < desiredTotal:
            return False

        memo = {}

        def can_win(state, remaining):
            cached = memo.get(state)
            if cached is not None:
                return cached
            for choice in range(1, maxChoosableInteger + 1):
                bit = 1 << (choice - 1)
                if state & bit:
                    continue
                if choice >= remaining or not can_win(state | bit, remaining - choice):
                    memo[state] = True
                    return True
            memo[state] = False
            return False

        return can_win(0, desiredTotal)
