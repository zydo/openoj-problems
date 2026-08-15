from typing import List, Optional


class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        cnt = {"T": 0, "F": 0}
        left = 0
        best = 0
        for right, ch in enumerate(answerKey):
            cnt[ch] += 1
            while min(cnt["T"], cnt["F"]) > k:
                cnt[answerKey[left]] -= 1
                left += 1
            best = max(best, right - left + 1)
        return best
