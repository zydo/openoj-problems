from typing import List, Optional


class Solution:
    def digitsCount(self, d: int, low: int, high: int) -> int:
        def count_up_to(d: int, n: int) -> int:
            if n <= 0:
                return 0
            s = str(n)
            length = len(s)
            total = 0
            for i, ch in enumerate(s):
                high_part = int(s[:i]) if i else 0
                cur = int(ch)
                low_part = int(s[i + 1 :]) if i + 1 < length else 0
                power = 10 ** (length - 1 - i)
                if d == 0:
                    if high_part >= 1:
                        if cur > 0:
                            total += high_part * power
                        else:
                            total += (high_part - 1) * power + low_part + 1
                else:
                    if cur > d:
                        total += (high_part + 1) * power
                    elif cur == d:
                        total += high_part * power + low_part + 1
                    else:
                        total += high_part * power
            return total

        return count_up_to(d, high) - count_up_to(d, low - 1)
