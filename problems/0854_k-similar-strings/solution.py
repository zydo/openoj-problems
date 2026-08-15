from typing import List, Optional
from collections import deque


class Solution:
    def kSimilarity(self, s1: str, s2: str) -> int:
        queue = deque([(s1, 0)])
        seen = {s1}
        while queue:
            s, steps = queue.popleft()
            if s == s2:
                return steps
            i = 0
            while s[i] == s2[i]:
                i += 1
            for j in range(i + 1, len(s)):
                if s[j] == s2[i] and s[j] != s2[j]:
                    ns = s[:i] + s[j] + s[i + 1 : j] + s[i] + s[j + 1 :]
                    if ns not in seen:
                        seen.add(ns)
                        queue.append((ns, steps + 1))
        return -1
