from typing import List, Optional


class Solution:
    def bestSuffixMatches(self, entries: List[str], queries: List[str]) -> List[int]:
        lens = [len(w) for w in entries]

        # Tie-break: shorter word wins, then the smaller index.
        def better(a, b):
            if b == -1:
                return True
            if lens[a] != lens[b]:
                return lens[a] < lens[b]
            return a < b

        # Trie over reversed words; the root represents the empty suffix.
        root = {"best": -1}

        # Insert each word backwards, annotating every visited node, root included.
        for i, word in enumerate(entries):
            node = root
            if better(i, node["best"]):
                node["best"] = i
            for ch in reversed(word):
                nxt = node.get(ch)
                if nxt is None:
                    nxt = {"best": -1}
                    node[ch] = nxt
                node = nxt
                if better(i, node["best"]):
                    node["best"] = i

        ans = []
        # Walk the reversed query as deep as the trie allows; deepest node's best wins.
        for word in queries:
            node = root
            # Root's best answers the empty-suffix case (no child matched).
            res = root["best"]
            for ch in reversed(word):
                nxt = node.get(ch)
                if nxt is None:
                    break
                node = nxt
                res = node["best"]
            ans.append(res)
        return ans
