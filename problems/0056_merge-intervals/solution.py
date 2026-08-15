from typing import List, Optional


class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        ordered = sorted(intervals, key=lambda item: (item[0], item[1]))
        merged = []
        for start, end in ordered:
            if merged and start <= merged[-1][1]:
                if end > merged[-1][1]:
                    merged[-1][1] = end
            else:
                merged.append([start, end])
        return merged
