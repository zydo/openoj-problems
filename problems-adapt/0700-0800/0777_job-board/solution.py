import heapq


class JobBoard:
    def __init__(self, jobs: list[list[int]]) -> None:
        self.jobs: dict[int, tuple[int, int]] = {}  # jobId -> (priority, userId)
        self.heap: list[tuple[int, int, int]] = []  # (-priority, -jobId, userId)
        for userId, jobId, priority in jobs:
            self.jobs[jobId] = (priority, userId)
            self.heap.append((-priority, -jobId, userId))
        heapq.heapify(self.heap)

    def post(self, userId: int, jobId: int, priority: int) -> None:
        self.jobs[jobId] = (priority, userId)
        heapq.heappush(self.heap, (-priority, -jobId, userId))

    def reprioritize(self, jobId: int, newPriority: int) -> None:
        _, userId = self.jobs[jobId]
        self.jobs[jobId] = (newPriority, userId)
        heapq.heappush(self.heap, (-newPriority, -jobId, userId))

    def withdraw(self, jobId: int) -> None:
        del self.jobs[jobId]

    def runTop(self) -> int:
        while self.heap:
            neg_priority, neg_job, userId = self.heap[0]
            record = self.jobs.get(-neg_job)
            if record is not None and record[0] == -neg_priority:
                heapq.heappop(self.heap)
                del self.jobs[-neg_job]
                return userId
            heapq.heappop(self.heap)
        return -1
