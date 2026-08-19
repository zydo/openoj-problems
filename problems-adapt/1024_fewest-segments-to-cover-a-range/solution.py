from typing import List, Optional


class Solution:
    def fewestSegments(self, segments: List[List[int]], span: int) -> int:
        # Jump-game greedy over segments sorted by start.
        ordered = sorted(segments)
        count = 0
        covered = 0
        farthest = 0
        i = 0
        n = len(ordered)
        while covered < span:
            # Cursor i never resets: every segment starting at or before `covered`
            # is examined once, tracking the farthest reach it enables.
            while i < n and ordered[i][0] <= covered:
                if ordered[i][1] > farthest:
                    farthest = ordered[i][1]
                i += 1
            # No usable segment reaches past the current coverage: an unbridgeable gap.
            if farthest == covered:
                return -1
            # Take one segment — the farthest-reaching — and jump the frontier.
            covered = farthest
            count += 1
        return count
