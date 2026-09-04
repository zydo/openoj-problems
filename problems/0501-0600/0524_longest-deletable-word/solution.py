from typing import List


class Solution:
    def longestBuildableWord(self, s: str, dictionary: List[str]) -> str:
        best = ""
        for word in dictionary:
            # Deleting characters from s leaves a subsequence, so a word is
            # buildable exactly when it is one. Walk s once, matching each
            # word character at its earliest legal position — greedy is safe,
            # and the word forms iff the pointer runs off its end.
            i = 0
            for ch in s:
                if i < len(word) and ch == word[i]:
                    i += 1
            buildable = i == len(word)
            # Longer wins; equal lengths go to the lexicographically smaller
            # word. The empty seed makes the no-answer case return "".
            if buildable and (len(word) > len(best) or (len(word) == len(best) and word < best)):
                best = word
        return best
