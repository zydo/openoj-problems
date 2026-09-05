"""The page-link API (problem-provided oracle).

Ships with the problem, assembled into every submission's namespace by
the judge, never editable in the editor: `linksFrom(url)` returns the
outgoing links of that page in the hidden web graph. This file is the
implementation; solvers see only the public API documented in the
starter.
"""

from typing import List


class LinkIndex:
    def __init__(self, urls: List[str], edges: List[List[int]], budget: int):
        self.index = {url: i for i, url in enumerate(urls)}
        self.urls = urls
        self.links: List[List[str]] = [[] for _ in urls]
        for source, target in edges:
            self.links[source].append(urls[target])
        self.budget = budget
        self.fetched = set()

    def linksFrom(self, url: str) -> List[str]:  # noqa: N802 — LeetCode API
        if self.budget <= 0:
            raise RuntimeError("LinkIndex query budget exhausted")
        self.budget -= 1
        self.fetched.add(url)
        position = self.index.get(url)
        return list(self.links[position]) if position is not None else []

    def verdict(self) -> List[str]:
        """The harvestSite's observable effect: every page the crawler fetched."""
        return sorted(self.fetched)
