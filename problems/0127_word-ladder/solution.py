from typing import List


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        word_set = set(wordList)
        if endWord not in word_set:
            return 0
        length = len(beginWord)

        buckets = {}
        for word in wordList:
            for i in range(length):
                buckets.setdefault(word[:i] + "*" + word[i + 1 :], []).append(word)

        visited = {beginWord}
        queue = [beginWord]
        steps = 1
        while queue:
            nxt = []
            for word in queue:
                if word == endWord:
                    return steps
                for i in range(length):
                    for neighbor in buckets.pop(word[:i] + "*" + word[i + 1 :], []):
                        if neighbor not in visited:
                            visited.add(neighbor)
                            nxt.append(neighbor)
            queue = nxt
            steps += 1
        return 0
