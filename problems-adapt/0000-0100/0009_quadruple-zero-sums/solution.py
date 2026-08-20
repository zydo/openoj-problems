class Solution:
    def countQuadrupleZeroSums(self, first: list[int], second: list[int], third: list[int], fourth: list[int]) -> int:
        # Meet in the middle: a+b+c+d = 0 iff a+b = -(c+d), so index the
        # first two arrays' pair sums with multiplicities (not a set).
        sums = {}
        for a in first:
            for b in second:
                key = a + b
                sums[key] = sums.get(key, 0) + 1
        total = 0
        # Each (c,d) pair adds the number of (a,b) pairs summing to its
        # negation; every zero tuple is counted once via its unique split.
        for c in third:
            for d in fourth:
                total += sums.get(-(c + d), 0)
        return total
