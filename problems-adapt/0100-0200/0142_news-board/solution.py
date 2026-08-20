from typing import Dict, List, Optional, Set, Tuple

import heapq


class NewsBoard:
    """Per-user chronological message lists plus follow sets.

    `getFeed` merges the last (up to) 10 messages of the user and every
    followee with a size-10 min-heap keyed on the global timestamp, so only
    the 10 most recent messages across all sources survive.
    """

    def __init__(self) -> None:
        self.posts: Dict[int, List[Tuple[int, int]]] = {}  # user -> [(time, id)]
        self.following: Dict[int, Set[int]] = {}
        self.clock = 0

    def postMessage(self, userId: int, messageId: int) -> None:  # noqa: N802 — public API
        self.posts.setdefault(userId, []).append((self.clock, messageId))
        self.clock += 1

    def getFeed(self, userId: int) -> List[int]:  # noqa: N802 — public API
        sources = {userId, *self.following.get(userId, set())}
        heap: List[Tuple[int, int]] = []  # min-heap of (time, messageId)
        for source in sources:
            for entry in self.posts.get(source, [])[-10:]:
                heapq.heappush(heap, entry)
                if len(heap) > 10:
                    heapq.heappop(heap)
        heap.sort(reverse=True)
        return [messageId for _, messageId in heap]

    def follow(self, followerId: int, followeeId: int) -> None:  # noqa: N802 — public API
        self.following.setdefault(followerId, set()).add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:  # noqa: N802 — public API
        self.following.get(followerId, set()).discard(followeeId)
