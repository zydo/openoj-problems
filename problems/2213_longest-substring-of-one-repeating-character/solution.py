from typing import List, Optional


class Solution:
    def longestRepeating(
        self, s: str, queryCharacters: str, queryIndices: List[int]
    ) -> List[int]:
        n = len(s)
        if n == 0:
            return []

        pref = [0] * (4 * n)
        suf = [0] * (4 * n)
        best = [0] * (4 * n)
        seg_len = [0] * (4 * n)
        left_char = [""] * (4 * n)
        right_char = [""] * (4 * n)
        chars = list(s)

        def pull(node):
            l, r = 2 * node, 2 * node + 1
            seg_len[node] = seg_len[l] + seg_len[r]
            left_char[node] = left_char[l]
            right_char[node] = right_char[r]
            if pref[l] == seg_len[l] and left_char[l] == left_char[r]:
                pref[node] = pref[l] + pref[r]
            else:
                pref[node] = pref[l]
            if suf[r] == seg_len[r] and right_char[r] == right_char[l]:
                suf[node] = suf[r] + suf[l]
            else:
                suf[node] = suf[r]
            joined = suf[l] + pref[r] if right_char[l] == left_char[r] else 0
            best[node] = max(best[l], best[r], joined)

        def build(node, lo, hi):
            if lo == hi:
                pref[node] = suf[node] = best[node] = 1
                seg_len[node] = 1
                left_char[node] = right_char[node] = chars[lo]
                return
            mid = (lo + hi) // 2
            build(2 * node, lo, mid)
            build(2 * node + 1, mid + 1, hi)
            pull(node)

        def update(node, lo, hi, pos, ch):
            if lo == hi:
                chars[pos] = ch
                left_char[node] = right_char[node] = ch
                return
            mid = (lo + hi) // 2
            if pos <= mid:
                update(2 * node, lo, mid, pos, ch)
            else:
                update(2 * node + 1, mid + 1, hi, pos, ch)
            pull(node)

        build(1, 0, n - 1)
        result = []
        for ch, idx in zip(queryCharacters, queryIndices):
            update(1, 0, n - 1, idx, ch)
            result.append(best[1])
        return result
