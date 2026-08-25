from typing import List


class _SegTree:
    """Iterative lazy range-add segment tree over right-end indices.

    Leaf r stores balance(l, r) for the current left endpoint l; internal
    nodes keep the min and max of their subtree (own lazy tag included).
    Adjacent leaves differ by at most 1, so within any contiguous node
    min <= 0 <= max guarantees an exact 0 — that makes the rightmost-zero
    descent sound.
    """

    def __init__(self, n: int):
        size = 1
        log = 0
        while size < n:
            size <<= 1
            log += 1
        self.n = n
        self.size = size
        self.log = log
        INF = 10 ** 9
        self.mn = [INF] * (2 * size)
        self.mx = [-INF] * (2 * size)
        self.lz = [0] * size
        # Real leaves start at balance 0; the padded ones stay extreme so
        # the exact-zero search never lands on them.
        for i in range(n):
            self.mn[size + i] = 0
            self.mx[size + i] = 0
        for i in range(size - 1, 0, -1):
            self.mn[i] = min(self.mn[i * 2], self.mn[i * 2 + 1])
            self.mx[i] = max(self.mx[i * 2], self.mx[i * 2 + 1])

    def _apply(self, k: int, f: int) -> None:
        self.mn[k] += f
        self.mx[k] += f
        if k < self.size:
            self.lz[k] += f

    def _push(self, k: int) -> None:
        z = self.lz[k]
        if z:
            self._apply(k * 2, z)
            self._apply(k * 2 + 1, z)
            self.lz[k] = 0

    def add(self, l: int, r: int, f: int) -> None:
        """Add f to the half-open range [l, r)."""
        if l >= r:
            return
        l += self.size
        r += self.size
        l0, r0 = l, r
        for i in range(self.log, 0, -1):
            if ((l0 >> i) << i) != l0:
                self._push(l0 >> i)
            if ((r0 >> i) << i) != r0:
                self._push((r0 - 1) >> i)
        while l < r:
            if l & 1:
                self._apply(l, f)
                l += 1
            if r & 1:
                r -= 1
                self._apply(r, f)
            l >>= 1
            r >>= 1
        l, r = l0, r0
        for i in range(1, self.log + 1):
            if ((l >> i) << i) != l:
                k = l >> i
                self.mn[k] = min(self.mn[k * 2], self.mn[k * 2 + 1]) + self.lz[k]
                self.mx[k] = max(self.mx[k * 2], self.mx[k * 2 + 1]) + self.lz[k]
            if ((r >> i) << i) != r:
                k = (r - 1) >> i
                self.mn[k] = min(self.mn[k * 2], self.mn[k * 2 + 1]) + self.lz[k]
                self.mx[k] = max(self.mx[k * 2], self.mx[k * 2 + 1]) + self.lz[k]

    def rightmost_zero(self, l: int, r: int) -> int:
        """Rightmost index in [l, r) whose value is 0, or -1 if none."""
        l0 = l + self.size
        r0 = r + self.size
        for i in range(self.log, 0, -1):
            if ((l0 >> i) << i) != l0:
                self._push(l0 >> i)
            if ((r0 >> i) << i) != r0:
                self._push((r0 - 1) >> i)
        l, r = l0, r0
        left = []
        right = []
        while l < r:
            if l & 1:
                left.append(l)
                l += 1
            if r & 1:
                r -= 1
                right.append(r)
            l >>= 1
            r >>= 1
        for k in reversed(left + right[::-1]):
            if self.mn[k] <= 0 <= self.mx[k]:
                while k < self.size:
                    self._push(k)
                    rc = k * 2 + 1
                    if self.mn[rc] <= 0 <= self.mx[rc]:
                        k = rc
                    else:
                        k = k * 2
                return k - self.size
        return -1


class Solution:
    def longestBalanced(self, nums: List[int]) -> int:
        n = len(nums)
        # first occurrence of each value (seeds balance(0, r)) and the next
        # occurrence of each position (tells where a value stops mattering).
        first = {}
        nxt = [n] * n
        last = {}
        for i in range(n - 1, -1, -1):
            v = nums[i]
            if v in last:
                nxt[i] = last[v]
            last[v] = i
        for i, v in enumerate(nums):
            if v not in first:
                first[v] = i

        # Seed balance(0, r): each value contributes its sign to every right
        # end at or after its first occurrence.
        tree = _SegTree(n)
        for v, p in first.items():
            tree.add(p, n, 1 if v & 1 else -1)

        best = 0
        for l in range(n):
            r = tree.rightmost_zero(l, n)
            if r != -1:
                best = max(best, r - l + 1)
            # Move l to l + 1: the value at l stops contributing to windows
            # that end before its next occurrence.
            v = nums[l]
            if nxt[l] > l:
                tree.add(l, nxt[l], -1 if v & 1 else 1)
        return best
