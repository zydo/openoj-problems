from typing import List, Optional


class Solution:
    def splitPainting(self, segments: List[List[int]]) -> List[List[int]]:
        diff = {}
        for start, end, color in segments:
            diff[start] = diff.get(start, 0) + color
            diff[end] = diff.get(end, 0) - color
        keys = sorted(diff)
        result = []
        running = 0
        for i in range(len(keys) - 1):
            running += diff[keys[i]]
            if running > 0:
                result.append([keys[i], keys[i + 1], running])
        return result
