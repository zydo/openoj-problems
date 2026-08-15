from typing import List, Optional


class Solution:
    def maximumScore(self, nums: List[int], k: int) -> int:
        MOD = 10**9 + 7
        n = len(nums)
        maxv = max(nums)

        spf = list(range(maxv + 1))
        i = 2
        while i * i <= maxv:
            if spf[i] == i:
                for j in range(i * i, maxv + 1, i):
                    if spf[j] == j:
                        spf[j] = i
            i += 1

        scores = []
        for x in nums:
            primes = set()
            v = x
            while v > 1:
                p = spf[v]
                primes.add(p)
                while v % p == 0:
                    v //= p
            scores.append(len(primes))

        left = [-1] * n
        stack = []
        for i in range(n):
            while stack and scores[stack[-1]] < scores[i]:
                stack.pop()
            left[i] = stack[-1] if stack else -1
            stack.append(i)

        right = [n] * n
        stack = []
        for i in range(n - 1, -1, -1):
            while stack and scores[stack[-1]] <= scores[i]:
                stack.pop()
            right[i] = stack[-1] if stack else n
            stack.append(i)

        ranges = [(i - left[i]) * (right[i] - i) for i in range(n)]
        items = sorted(zip(nums, ranges), key=lambda t: -t[0])

        score = 1
        rem = k
        for val, cnt in items:
            use = min(cnt, rem)
            if use:
                score = score * pow(val, use, MOD) % MOD
                rem -= use
            if rem == 0:
                break
        return score
