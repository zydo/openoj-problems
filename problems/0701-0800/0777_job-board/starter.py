class JobBoard:
    def __init__(self, jobs: list[list[int]]) -> None:
        raise NotImplementedError("TODO")

    def post(self, userId: int, jobId: int, priority: int) -> None:
        raise NotImplementedError("TODO")

    def reprioritize(self, jobId: int, newPriority: int) -> None:
        raise NotImplementedError("TODO")

    def withdraw(self, jobId: int) -> None:
        raise NotImplementedError("TODO")

    def runTop(self) -> int:
        raise NotImplementedError("TODO")
