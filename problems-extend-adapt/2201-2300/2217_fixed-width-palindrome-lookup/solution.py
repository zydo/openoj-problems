from typing import List


class Solution:
    def palindromeAtRank(self, queries: List[int], width: int) -> List[int]:
        # A palindrome is fully determined by its first ceil(width/2)
        # digits, so the kth palindrome is the (10^(half-1) + k - 1)th
        # half-number mirrored; a query past the supply of halves is -1.
        half = (width + 1) // 2
        count = 9 * 10 ** (half - 1)
        answer: List[int] = []
        for query in queries:
            if query > count:
                answer.append(-1)
                continue
            prefix = str(10 ** (half - 1) + query - 1)
            answer.append(int(prefix + prefix[: width // 2][::-1]))
        return answer
