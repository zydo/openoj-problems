import heapq


class RunningKthLargest:
    """Min-heap holding exactly the k largest scores seen so far.

    The heap minimum is the kth largest element of the whole pool, so `add`
    pushes the new value, evicts the smallest when the heap exceeds k, and
    reads the root.
    """

    def __init__(self, k: int, nums: list[int]) -> None:
        self.k = k
        self.heap = list(nums)
        heapq.heapify(self.heap)
        while len(self.heap) > k:
            heapq.heappop(self.heap)

    def add(self, val: int) -> int:
        heapq.heappush(self.heap, val)
        if len(self.heap) > self.k:
            heapq.heappop(self.heap)
        return self.heap[0]
