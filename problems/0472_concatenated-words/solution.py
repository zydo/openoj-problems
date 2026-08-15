from typing import List, Optional


class Solution:
    def findAllConcatenatedWordsInADict(self, words: List[str]) -> List[str]:
        dictionary = set(words)

        def is_concatenated(word):
            n = len(word)
            dp = [False] * (n + 1)
            dp[0] = True
            for i in range(1, n + 1):
                for j in range(i):
                    if j == 0 and i == n:
                        continue  # the word itself does not count as a part
                    if dp[j] and word[j:i] in dictionary:
                        dp[i] = True
                        break
            return dp[n]

        return [word for word in words if is_concatenated(word)]
