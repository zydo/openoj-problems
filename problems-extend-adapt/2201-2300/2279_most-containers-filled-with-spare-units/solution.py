from typing import List


class Solution:
    def mostFilledContainers(self, capacity: List[int], contents: List[int], spare: int) -> int:
        needs = sorted(c - r for c, r in zip(capacity, contents))
        remaining = spare
        full = 0
        for need in needs:
            if need > remaining:
                break
            remaining -= need
            full += 1
        return full
