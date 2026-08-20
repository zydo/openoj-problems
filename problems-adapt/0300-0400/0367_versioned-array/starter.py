class VersionedArray:
    def __init__(self, length: int) -> None:
        raise NotImplementedError("TODO")

    def set(self, index: int, val: int) -> None:
        raise NotImplementedError("TODO")

    def commit(self) -> int:
        raise NotImplementedError("TODO")

    def get(self, index: int, commit_id: int) -> int:
        raise NotImplementedError("TODO")
