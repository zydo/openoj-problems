from typing import List, Optional


class Solution:
    def sumPrefixScores(self, words: List[str]) -> List[int]:
        root = {}
        for word in words:
            node = root
            for ch in word:
                node = node.setdefault(ch, {})
                node["#"] = node.get("#", 0) + 1
        scores = []
        for word in words:
            node = root
            total = 0
            for ch in word:
                node = node[ch]
                total += node["#"]
            scores.append(total)
        return scores
