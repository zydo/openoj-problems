from typing import List, Optional


class UploadPrefixTracker:
    def __init__(self, n: int):
        raise NotImplementedError("TODO")

    def markUploaded(self, video: int):
        raise NotImplementedError("TODO")

    def longestReadyPrefix(self) -> int:
        raise NotImplementedError("TODO")
