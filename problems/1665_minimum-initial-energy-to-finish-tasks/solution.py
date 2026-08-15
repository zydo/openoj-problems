from typing import List, Optional


class Solution:
    def minimumEffort(self, tasks: List[List[int]]) -> int:
        tasks = sorted(tasks, key=lambda t: t[1] - t[0], reverse=True)
        spent = 0
        answer = 0
        for actual, minimum in tasks:
            answer = max(answer, spent + minimum)
            spent += actual
        return answer
