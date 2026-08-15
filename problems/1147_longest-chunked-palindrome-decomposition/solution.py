from typing import List, Optional


class Solution:
    def longestDecomposition(self, text: str) -> int:
        n = len(text)
        count = 0
        left = 0
        right = n
        while left < right:
            size = 1
            matched = False
            while left + size <= right - size:
                if text[left : left + size] == text[right - size : right]:
                    count += 2
                    left += size
                    right -= size
                    matched = True
                    break
                size += 1
            if not matched:
                count += 1
                break
        return count
