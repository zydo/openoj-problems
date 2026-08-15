from typing import List, Optional


class Solution:
    def countSubstrings(self, s: str) -> int:
        digits = [ord(c) - 48 for c in s]
        total = 0
        for d in range(1, 10):
            cnt = [0] * d
            for di in digits:
                if di == d:
                    for r in range(d):
                        if (r * 10) % d == 0:
                            total += cnt[r]
                    total += 1
                new_cnt = [0] * d
                for r in range(d):
                    if cnt[r]:
                        new_cnt[(r * 10 + di) % d] += cnt[r]
                new_cnt[di % d] += 1
                cnt = new_cnt
        return total
