from typing import List, Optional


class Solution:
    def combinedMedian(self, first: List[int], second: List[int]) -> float:
        # Keep first as the shorter array: smaller search space, and the
        # partner cut j is guaranteed to land inside [0, n].
        if len(first) > len(second):
            first, second = second, first
        m, n = len(first), len(second)
        total = m + n
        half = total // 2
        lo, hi = 0, m
        while True:
            # Binary-search the cut: i = elements first gives to the left
            # half; the cut in second is then forced by the half's size.
            i = (lo + hi) // 2
            j = half - i
            # Sentinels make edge cuts well-defined: a cut at 0 or past the
            # end needs no special casing.
            a_left = first[i - 1] if i > 0 else float("-inf")
            a_right = first[i] if i < m else float("inf")
            b_left = second[j - 1] if j > 0 else float("-inf")
            b_right = second[j] if j < n else float("inf")
            # Both arrays are sorted, so comparing across the cut suffices:
            # everything on the left is <= everything on the right.
            if a_left <= b_right and b_left <= a_right:
                if total % 2:
                    # Odd total: the left half was made the smaller side.
                    return float(min(a_right, b_right))
                return (max(a_left, b_left) + min(a_right, b_right)) / 2
            if a_left > b_right:
                # first is contributing too many elements to the left half.
                hi = i - 1
            else:
                lo = i + 1
