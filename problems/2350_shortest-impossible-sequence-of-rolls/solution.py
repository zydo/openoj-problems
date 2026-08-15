from typing import List, Optional


class Solution:
    def shortestSequence(self, rolls: List[int], k: int) -> int:
        seen = set()
        answer = 1
        for r in rolls:
            seen.add(r)
            if len(seen) == k:
                answer += 1
                seen = set()
        return answer
