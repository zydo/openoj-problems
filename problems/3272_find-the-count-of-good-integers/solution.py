from math import factorial


class Solution:
    def countGoodIntegers(self, n: int, k: int) -> int:
        half = (n + 1) // 2
        fact = [factorial(i) for i in range(n + 1)]
        seen = set()
        for first in range(10**half):
            prefix = str(first).zfill(half)
            if n % 2 == 0:
                palindrome = prefix + prefix[::-1]
            else:
                palindrome = prefix + prefix[-2::-1]
            if palindrome[0] != "0" and int(palindrome) % k == 0:
                counts = [0] * 10
                for ch in palindrome:
                    counts[ord(ch) - 48] += 1
                seen.add(tuple(counts))
        answer = 0
        for counts in seen:
            total = fact[n]
            for c in counts:
                total //= fact[c]
            if counts[0] > 0:
                lead = fact[n - 1]
                lead //= fact[counts[0] - 1]
                for d in range(1, 10):
                    lead //= fact[counts[d]]
                total -= lead
            answer += total
        return answer
