import heapq


class Solution:
    def rollingWindowMaxima(self, nums: list[int], k: int) -> list[int]:
        heap = []  # (-value, index): negation turns heapq's min-heap into a max-heap
        result = []
        for i, value in enumerate(nums):
            heapq.heappush(heap, (-value, i))
            # Lazy deletion: pop records whose index has slid out of the window.
            while heap[0][1] <= i - k:
                heapq.heappop(heap)
            # The top is now the largest value still inside the window.
            if i >= k - 1:
                result.append(-heap[0][0])
        return result
