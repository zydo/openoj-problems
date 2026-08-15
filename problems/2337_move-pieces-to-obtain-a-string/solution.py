from typing import List, Optional


class Solution:
    def canChange(self, start: str, target: str) -> bool:
        s = [(i, c) for i, c in enumerate(start) if c != "_"]
        t = [(i, c) for i, c in enumerate(target) if c != "_"]
        if len(s) != len(t):
            return False
        for (i, ci), (j, cj) in zip(s, t):
            if ci != cj:
                return False
            if ci == "L" and i < j:
                return False
            if ci == "R" and i > j:
                return False
        return True
