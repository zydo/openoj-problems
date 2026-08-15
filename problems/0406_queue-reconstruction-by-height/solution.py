from typing import List, Optional


class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        ordered = sorted((list(p) for p in people), key=lambda p: (-p[0], p[1]))
        queue = []
        for person in ordered:
            queue.insert(person[1], person)
        return queue
