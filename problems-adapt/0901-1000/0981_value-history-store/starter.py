class HistoryStore:
    def __init__(self):
        raise NotImplementedError("TODO")

    def set(self, key: str, value: str, timestamp: int):
        raise NotImplementedError("TODO")

    def get(self, key: str, timestamp: int) -> str:
        raise NotImplementedError("TODO")
