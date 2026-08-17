from typing import List, Optional


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        import heapq

        # nlargest streams a min-heap of size k over the array — the root is
        # always the smallest of the top k. The result is the k largest in
        # descending order, so [-1] is the kth largest by rank, duplicates
        # counted.
        return heapq.nlargest(k, nums)[-1]
