from typing import List


class Solution:
    def trimmedMean(self, salary: List[int]) -> float:
        total = 0
        low = min(salary)
        high = max(salary)
        for value in salary:
            total += value
        return (total - low - high) / (len(salary) - 2)
