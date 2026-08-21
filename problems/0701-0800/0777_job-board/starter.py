class JobBoard:
    def __init__(self, jobs: list[list[int]]):
        pass

    def post(self, userId: int, jobId: int, priority: int):
        pass

    def reprioritize(self, jobId: int, newPriority: int):
        pass

    def withdraw(self, jobId: int):
        pass

    def runTop(self) -> int:
        pass
