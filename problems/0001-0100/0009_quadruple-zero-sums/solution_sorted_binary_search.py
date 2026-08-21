from bisect import bisect_left, bisect_right


class Solution:
    def countQuadrupleZeroSums(self, first: list[int], second: list[int], third: list[int], fourth: list[int]) -> int:
        # Same split as the hash-map version -- a+b+c+d = 0 iff a+b = -(c+d)
        # -- but the join is ordered ground rather than a table: materialise
        # both halves' pair sums and sort the right one.
        left = [a + b for a in first for b in second]
        right = [c + d for c in third for d in fourth]
        right.sort()
        total = 0
        # Each left sum asks "how many right sums equal my negation?"; on a
        # sorted array a pair of binary searches brackets exactly that run.
        for sum_ in left:
            negated = -sum_
            total += bisect_right(right, negated) - bisect_left(right, negated)
        return total
