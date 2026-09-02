from typing import List, Optional


class Solution:
    def maxWordCount(self, sentences: List[str]) -> int:
        maximum = 0
        for sentence in sentences:
            maximum = max(maximum, sentence.count(" ") + 1)
        return maximum
