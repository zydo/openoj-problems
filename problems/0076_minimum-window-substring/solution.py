from typing import List, Optional


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not t or len(t) > len(s):
            return ""
        need = {}
        for ch in t:
            need[ch] = need.get(ch, 0) + 1
        missing = len(t)
        best_start, best_len = 0, float("inf")
        left = 0
        for right, ch in enumerate(s):
            if need.get(ch, 0) > 0:
                missing -= 1
            need[ch] = need.get(ch, 0) - 1
            if missing == 0:
                while left < right and need[s[left]] < 0:
                    need[s[left]] += 1
                    left += 1
                if right - left + 1 < best_len:
                    best_start, best_len = left, right - left + 1
                need[s[left]] += 1
                missing += 1
                left += 1
        return "" if best_len == float("inf") else s[best_start : best_start + best_len]
