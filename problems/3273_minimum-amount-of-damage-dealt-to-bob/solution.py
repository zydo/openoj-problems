from typing import List


class Solution:
    def minDamage(self, power: int, damage: List[int], health: List[int]) -> int:
        n = len(damage)
        times = [(h + power - 1) // power for h in health]
        order = sorted(range(n), key=lambda i: -damage[i] / times[i])
        remaining = sum(damage)
        answer = 0
        for i in order:
            answer += remaining * times[i]
            remaining -= damage[i]
        return answer
