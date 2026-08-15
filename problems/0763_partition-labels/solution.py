from typing import List, Optional


class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        last = {}
        for i, c in enumerate(s):
            last[c] = i
        parts = []
        start = 0
        end = 0
        for i, c in enumerate(s):
            end = max(end, last[c])
            if i == end:
                parts.append(end - start + 1)
                start = i + 1
        return parts
