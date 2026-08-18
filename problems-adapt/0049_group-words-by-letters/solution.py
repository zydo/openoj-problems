from typing import List, Optional


class Solution:
    def groupByLetters(self, words: List[str]) -> List[List[str]]:
        groups = {}
        for word in words:
            # Sorting canonicalizes the character multiset: rearrangements produce
            # byte-identical keys and unrelated words can never collide on one.
            key = "".join(sorted(word))
            # setdefault creates the bucket on first sight of a key, so group
            # membership accumulates automatically — every word lands in
            # exactly one bucket, alongside precisely its rearrangements.
            groups.setdefault(key, []).append(word)
        # The buckets are the required groups.
        return list(groups.values())
