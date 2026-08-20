class Solution:
    def nthFiveSmooth(self, n: int) -> int:
        # Every five-smooth number past 1 is a smaller one times 2, 3, or 5, so the
        # sequence is generated in order as the merge of three virtual lists
        # 2·U, 3·U, 5·U — no testing of arbitrary integers for smoothness.
        smooth = [0] * (n + 1)
        smooth[0] = 1
        # One cursor per list, sitting on the source of its smallest
        # not-yet-emitted element.
        i2 = i3 = i5 = 0
        for i in range(1, n + 1):
            m2, m3, m5 = smooth[i2] * 2, smooth[i3] * 3, smooth[i5] * 5
            # The next five-smooth number is the smallest head of the three lists.
            nxt = min(m2, m3, m5)
            smooth[i] = nxt
            # Advance EVERY cursor whose candidate matched: 6 arises as both
            # 2·3 and 3·2, and the dual advance suppresses such duplicates.
            if nxt == m2:
                i2 += 1
            if nxt == m3:
                i3 += 1
            if nxt == m5:
                i5 += 1
        # The array carries a leading 1, so the n-th five-smooth number is at n - 1.
        return smooth[n - 1]
