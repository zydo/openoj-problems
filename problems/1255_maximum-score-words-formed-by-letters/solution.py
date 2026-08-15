from typing import List, Optional


class Solution:
    def maxScoreWords(
        self, words: List[str], letters: List[str], score: List[int]
    ) -> int:
        available = [0] * 26
        for ch in letters:
            available[ord(ch) - ord("a")] += 1
        n = len(words)
        needs = []
        values = []
        for w in words:
            need = [0] * 26
            value = 0
            for ch in w:
                idx = ord(ch) - ord("a")
                need[idx] += 1
                value += score[idx]
            needs.append(need)
            values.append(value)

        best = 0

        def dfs(i, remaining, total):
            nonlocal best
            if total > best:
                best = total
            if i == n:
                return
            dfs(i + 1, remaining, total)
            need = needs[i]
            if all(remaining[j] >= need[j] for j in range(26)):
                dfs(
                    i + 1,
                    [remaining[j] - need[j] for j in range(26)],
                    total + values[i],
                )

        dfs(0, available, 0)
        return best
