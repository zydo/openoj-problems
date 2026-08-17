from typing import List, Optional


class TaskManager:
    def __init__(self, tasks: List[List[int]]) -> None:
        raise NotImplementedError("TODO")

    def add(self, userId: int, taskId: int, priority: int) -> None:
        raise NotImplementedError("TODO")

    def edit(self, taskId: int, newPriority: int) -> None:
        raise NotImplementedError("TODO")

    def rmv(self, taskId: int) -> None:
        raise NotImplementedError("TODO")

    def execTop(self) -> int:
        raise NotImplementedError("TODO")
