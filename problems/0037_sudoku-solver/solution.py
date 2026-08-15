from typing import List, Optional


class Solution:
    def solveSudoku(self, board: List[List[str]]) -> List[List[str]]:
        rows = [0] * 9
        cols = [0] * 9
        boxes = [0] * 9
        empties = []
        for r in range(9):
            for c in range(9):
                ch = board[r][c]
                if ch == ".":
                    empties.append((r, c))
                else:
                    bit = 1 << int(ch)
                    rows[r] |= bit
                    cols[c] |= bit
                    boxes[(r // 3) * 3 + c // 3] |= bit

        def backtrack(k):
            if k == len(empties):
                return True
            r, c = empties[k]
            b = (r // 3) * 3 + c // 3
            for d in range(1, 10):
                bit = 1 << d
                if rows[r] & bit or cols[c] & bit or boxes[b] & bit:
                    continue
                rows[r] |= bit
                cols[c] |= bit
                boxes[b] |= bit
                board[r][c] = str(d)
                if backtrack(k + 1):
                    return True
                rows[r] ^= bit
                cols[c] ^= bit
                boxes[b] ^= bit
                board[r][c] = "."
            return False

        backtrack(0)
        return board
