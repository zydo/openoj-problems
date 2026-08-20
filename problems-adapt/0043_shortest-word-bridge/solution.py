from typing import List


class Solution:
    def shortestBridgeLength(self, startWord: str, targetWord: str, dictionary: List[str]) -> int:
        word_set = set(dictionary)
        # No sequence can end outside the dictionary.
        if targetWord not in word_set:
            return 0
        length = len(startWord)

        # File every word under each of its wildcard patterns ("malt" files
        # under "*alt", "m*lt", "ma*t", "mal*"): all one-letter neighbors
        # share one of its patterns.
        buckets = {}
        for word in dictionary:
            for i in range(length):
                buckets.setdefault(word[:i] + "*" + word[i + 1 :], []).append(word)

        # Level-order BFS; steps starts at 1 because startWord itself counts.
        visited = {startWord}
        queue = [startWord]
        steps = 1
        while queue:
            nxt = []
            for word in queue:
                if word == targetWord:
                    return steps
                for i in range(length):
                    # Pop the bucket so it is read once overall and can never
                    # be re-read via a same-level word sharing the pattern.
                    for neighbor in buckets.pop(word[:i] + "*" + word[i + 1 :], []):
                        if neighbor not in visited:
                            # Each word is enqueued at most once.
                            visited.add(neighbor)
                            nxt.append(neighbor)
            queue = nxt
            steps += 1
        return 0
