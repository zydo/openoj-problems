from typing import List, Optional


class Solution:
    def sumOfGoodSubsequences(self, nums: List[int]) -> int:
        MOD = 10**9 + 7
        cnt = {}
        sm = {}
        total = 0
        for v in nums:
            c_prev = cnt.get(v - 1, 0)
            c_next = cnt.get(v + 1, 0)
            s_prev = sm.get(v - 1, 0)
            s_next = sm.get(v + 1, 0)
            new_cnt = (1 + c_prev + c_next) % MOD
            new_sum = (v * new_cnt + s_prev + s_next) % MOD
            cnt[v] = (cnt.get(v, 0) + new_cnt) % MOD
            sm[v] = (sm.get(v, 0) + new_sum) % MOD
            total = (total + new_sum) % MOD
        return total
