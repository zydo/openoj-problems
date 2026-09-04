from typing import List


class Solution:
    def countEachWord(self, content: str) -> List[str]:
        # One counter per distinct word; split() drops leading/trailing
        # separators and never yields an empty word.
        counts = {}
        for word in content.split():
            counts[word] = counts.get(word, 0) + 1
        # Descending frequency, lexicographic word as the tiebreaker.
        ranked = sorted(counts.items(), key=lambda item: (-item[1], item[0]))
        return [f"{word} {count}" for word, count in ranked]
