class Solution:
    def largestMinGap(self, slots: list[int], m: int) -> int:
        slots = sorted(slots)

        def feasible(distance: int) -> bool:
            # Greedy: the first marker sits at the leftmost slot (count = 1),
            # then each marker takes the first slot at least `distance` beyond
            # the last placed one. Earliest-possible placement is never worse,
            # so failure here means no placement works.
            count = 1
            last = slots[0]
            for p in slots[1:]:
                if p - last >= distance:
                    count += 1
                    last = p
                    if count >= m:
                        # All markers placed — exit early.
                        return True
            return count >= m

        # Feasibility is monotone in the spacing, so binary search the
        # largest feasible d over [1, span]; the upper-mid form keeps the
        # search moving when lo and hi become adjacent.
        lo, hi = 1, slots[-1] - slots[0]
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if feasible(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
