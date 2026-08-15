from typing import List, Optional


class Solution:
    def findNumOfValidWords(self, words: List[str], puzzles: List[str]) -> List[int]:
        def word_mask(text):
            m = 0
            for ch in text:
                m |= 1 << (ord(ch) - 97)
            return m

        counts = {}
        for w in words:
            m = word_mask(w)
            counts[m] = counts.get(m, 0) + 1

        answer = []
        for puzzle in puzzles:
            first = 1 << (ord(puzzle[0]) - 97)
            puzzle_mask = word_mask(puzzle)
            total = 0
            sub = puzzle_mask
            while sub:
                if sub & first:
                    total += counts.get(sub, 0)
                sub = (sub - 1) & puzzle_mask
            answer.append(total)
        return answer
