from typing import List, Optional


class _Node:
    __slots__ = ("child",)

    def __init__(self):
        self.child = [None, None]


class Solution:
    def maximizeXor(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        nums = sorted(nums)
        sorted_queries = sorted((mi, xi, idx) for idx, (xi, mi) in enumerate(queries))
        answers = [0] * len(queries)
        root = _Node()
        ptr = 0
        n = len(nums)
        for mi, xi, idx in sorted_queries:
            while ptr < n and nums[ptr] <= mi:
                node = root
                v = nums[ptr]
                for bit in range(29, -1, -1):
                    b = (v >> bit) & 1
                    if node.child[b] is None:
                        node.child[b] = _Node()
                    node = node.child[b]
                ptr += 1
            if ptr == 0:
                answers[idx] = -1
                continue
            node = root
            best = 0
            for bit in range(29, -1, -1):
                xb = (xi >> bit) & 1
                want = 1 - xb
                if node.child[want] is not None:
                    best |= 1 << bit
                    node = node.child[want]
                else:
                    node = node.child[xb]
            answers[idx] = best
        return answers
