from typing import List, Optional


class Solution:
    def videoStitching(self, clips: List[List[int]], time: int) -> int:
        ordered = sorted(clips)
        count = 0
        covered = 0
        farthest = 0
        i = 0
        n = len(ordered)
        while covered < time:
            while i < n and ordered[i][0] <= covered:
                if ordered[i][1] > farthest:
                    farthest = ordered[i][1]
                i += 1
            if farthest == covered:
                return -1
            covered = farthest
            count += 1
        return count
