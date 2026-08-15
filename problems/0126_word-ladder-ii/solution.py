from typing import List, Optional


class Solution:
    def findLadders(
        self, beginWord: str, endWord: str, wordList: List[str]
    ) -> List[List[str]]:
        from collections import defaultdict, deque

        word_set = set(wordList)
        if endWord not in word_set:
            return []
        word_set.discard(beginWord)

        dist = {beginWord: 0}
        adjacency = defaultdict(list)
        queue = deque([beginWord])
        letters = "abcdefghijklmnopqrstuvwxyz"
        while queue:
            word = queue.popleft()
            d = dist[word]
            for i in range(len(word)):
                for c in letters:
                    if c == word[i]:
                        continue
                    nxt = word[:i] + c + word[i + 1 :]
                    if nxt not in word_set:
                        continue
                    if nxt not in dist:
                        dist[nxt] = d + 1
                        adjacency[word].append(nxt)
                        queue.append(nxt)
                    elif dist[nxt] == d + 1:
                        adjacency[word].append(nxt)

        result = []
        path = [beginWord]

        def dfs(word):
            if word == endWord:
                result.append(path[:])
                return
            for nxt in adjacency[word]:
                path.append(nxt)
                dfs(nxt)
                path.pop()

        dfs(beginWord)
        return result
