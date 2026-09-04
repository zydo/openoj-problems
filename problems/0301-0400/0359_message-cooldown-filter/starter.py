from typing import List, Optional


class MessageCooldown:
    def __init__(self):
        raise NotImplementedError("TODO")

    def allowMessage(self, timestamp: int, message: str) -> bool:
        raise NotImplementedError("TODO")
