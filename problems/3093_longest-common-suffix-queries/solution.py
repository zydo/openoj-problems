from typing import List, Optional


class Solution:
    def stringIndices(
        self, wordsContainer: List[str], wordsQuery: List[str]
    ) -> List[int]:
        lens = [len(w) for w in wordsContainer]

        def better(a, b):
            if b == -1:
                return True
            if lens[a] != lens[b]:
                return lens[a] < lens[b]
            return a < b

        root = {"best": -1}

        for i, word in enumerate(wordsContainer):
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
        for word in wordsQuery:
            node = root
            res = root["best"]
            for ch in reversed(word):
                nxt = node.get(ch)
                if nxt is None:
                    break
                node = nxt
                res = node["best"]
            ans.append(res)
        return ans
