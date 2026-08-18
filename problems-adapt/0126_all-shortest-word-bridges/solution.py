from typing import List, Optional


class Solution:
    def allShortestBridges(self, startWord: str, targetWord: str, dictionary: List[str]) -> List[List[str]]:
        from collections import defaultdict, deque

        word_set = set(dictionary)
        if targetWord not in word_set:
            return []
        # Drop startWord so the search can never route back through it.
        word_set.discard(startWord)

        # BFS over the implicit one-letter-difference graph: record each word's
        # shortest distance and a DAG of shortest-path edges.
        dist = {startWord: 0}
        adjacency = defaultdict(list)
        queue = deque([startWord])
        letters = "abcdefghijklmnopqrstuvwxyz"
        while queue:
            word = queue.popleft()
            d = dist[word]
            for i in range(len(word)):
                # Try substituting each of the 25 other letters at position i.
                for c in letters:
                    if c == word[i]:
                        continue
                    nxt = word[:i] + c + word[i + 1 :]
                    if nxt not in word_set:
                        continue
                    if nxt not in dist:
                        # First discovery: nxt is one level below word.
                        dist[nxt] = d + 1
                        adjacency[word].append(nxt)
                        queue.append(nxt)
                    elif dist[nxt] == d + 1:
                        # Already exactly one level below: parallel shortest edge.
                        adjacency[word].append(nxt)
                    # Same-level or backward edges can never lie on a shortest
                    # bridge, so they are simply not recorded.

        # DFS over the recorded DAG: every edge advances exactly one BFS level,
        # so any walk from the start to the target is a shortest bridge.
        result = []
        path = [startWord]

        def dfs(word):
            if word == targetWord:
                result.append(path[:])
                return
            for nxt in adjacency[word]:
                # Reuse one path buffer via append/pop.
                path.append(nxt)
                dfs(nxt)
                path.pop()

        dfs(startWord)
        return result
