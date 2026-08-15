from typing import List, Optional


class _SegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.lazy = [False] * (4 * self.n)
        self._build(1, 0, self.n - 1, arr)

    def _build(self, node, lo, hi, arr):
        if lo == hi:
            self.tree[node] = arr[lo]
            return
        mid = (lo + hi) // 2
        self._build(node * 2, lo, mid, arr)
        self._build(node * 2 + 1, mid + 1, hi, arr)
        self.tree[node] = self.tree[node * 2] + self.tree[node * 2 + 1]

    def _apply(self, node, lo, hi):
        self.tree[node] = (hi - lo + 1) - self.tree[node]
        self.lazy[node] = not self.lazy[node]

    def _push(self, node, lo, hi):
        if self.lazy[node]:
            mid = (lo + hi) // 2
            self._apply(node * 2, lo, mid)
            self._apply(node * 2 + 1, mid + 1, hi)
            self.lazy[node] = False

    def flip(self, node, lo, hi, ql, qr):
        if ql > hi or qr < lo:
            return
        if ql <= lo and hi <= qr:
            self._apply(node, lo, hi)
            return
        self._push(node, lo, hi)
        mid = (lo + hi) // 2
        self.flip(node * 2, lo, mid, ql, qr)
        self.flip(node * 2 + 1, mid + 1, hi, ql, qr)
        self.tree[node] = self.tree[node * 2] + self.tree[node * 2 + 1]

    def count_ones(self):
        return self.tree[1]


class Solution:
    def handleQuery(
        self, nums1: List[int], nums2: List[int], queries: List[List[int]]
    ) -> List[int]:
        n = len(nums1)
        seg = _SegTree(nums1)
        total = sum(nums2)
        answers = []
        for q in queries:
            kind = q[0]
            if kind == 1:
                seg.flip(1, 0, n - 1, q[1], q[2])
            elif kind == 2:
                total += q[1] * seg.count_ones()
            else:
                answers.append(total)
        return answers
