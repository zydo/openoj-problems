from typing import List, Optional


class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        words = set(wordDict)
        n = len(s)
        reachable = [False] * (n + 1)
        reachable[0] = True
        for i in range(1, n + 1):
            for j in range(i):
                if reachable[j] and s[j:i] in words:
                    reachable[i] = True
                    break
        return reachable[n]
