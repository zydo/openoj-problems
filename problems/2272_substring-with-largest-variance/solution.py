from typing import List, Optional


class Solution:
    def largestVariance(self, s: str) -> int:
        chars = set(s)
        answer = 0
        for high in chars:
            for low in chars:
                if high == low:
                    continue
                diff = 0  # max subarray sum ending here (may lack `low`)
                has_low = False  # whether diff_with_low has been initialized
                diff_with_low = 0  # same but guaranteed to contain at least one `low`
                for ch in s:
                    if ch == high:
                        diff += 1
                        if has_low:
                            diff_with_low += 1
                    elif ch == low:
                        diff -= 1
                        if has_low:
                            diff_with_low = max(diff_with_low - 1, diff)
                        else:
                            diff_with_low = diff
                            has_low = True
                        diff = max(0, diff)
                    # else: neither char, both values unchanged
                    if has_low and diff_with_low > answer:
                        answer = diff_with_low
        return answer
