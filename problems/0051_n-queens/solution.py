from typing import List, Optional


class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        results = []
        cols = set()
        diag1 = set()
        diag2 = set()
        board = []

        def backtrack(row):
            if row == n:
                results.append(list(board))
                return
            for col in range(n):
                if col in cols or (row - col) in diag1 or (row + col) in diag2:
                    continue
                cols.add(col)
                diag1.add(row - col)
                diag2.add(row + col)
                board.append("." * col + "Q" + "." * (n - col - 1))
                backtrack(row + 1)
                board.pop()
                cols.remove(col)
                diag1.remove(row - col)
                diag2.remove(row + col)

        backtrack(0)
        return results
