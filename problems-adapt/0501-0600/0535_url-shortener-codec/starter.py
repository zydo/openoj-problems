from typing import List, Optional


class UrlCodec:
    def __init__(self):
        raise NotImplementedError("TODO")

    def shorten(self, longUrl: str) -> str:
        raise NotImplementedError("TODO")

    def expand(self, shortUrl: str) -> str:
        raise NotImplementedError("TODO")
