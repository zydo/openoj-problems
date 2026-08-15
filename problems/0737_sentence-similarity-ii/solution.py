from typing import List, Optional


class Solution:
    def areSentencesSimilarTwo(
        self, sentence1: List[str], sentence2: List[str], similarPairs: List[List[str]]
    ) -> bool:
        if len(sentence1) != len(sentence2):
            return False

        parent = {}

        def find(x):
            parent.setdefault(x, x)
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(a, b):
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[ra] = rb

        for a, b in similarPairs:
            union(a, b)

        for a, b in zip(sentence1, sentence2):
            if a != b and find(a) != find(b):
                return False
        return True
