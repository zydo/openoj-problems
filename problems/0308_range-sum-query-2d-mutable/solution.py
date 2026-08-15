from typing import List


class NumMatrix:
    def __init__(self, matrix: List[List[int]]) -> None:
        self.m = len(matrix)
        self.n = len(matrix[0])
        self.matrix = [row[:] for row in matrix]
        self.tree = [[0] * (self.n + 1) for _ in range(self.m + 1)]
        for i in range(1, self.m + 1):
            row = [0] * (self.n + 1)
            source = self.matrix[i - 1]
            for j in range(1, self.n + 1):
                row[j] += source[j - 1]
                parent = j + (j & -j)
                if parent <= self.n:
                    row[parent] += row[j]
            tree_row = self.tree[i]
            for j in range(1, self.n + 1):
                tree_row[j] += row[j]
            parent_row = i + (i & -i)
            if parent_row <= self.m:
                target = self.tree[parent_row]
                for j in range(1, self.n + 1):
                    target[j] += tree_row[j]

    def update(self, row: int, col: int, val: int) -> None:
        delta = val - self.matrix[row][col]
        self.matrix[row][col] = val
        i = row + 1
        while i <= self.m:
            j = col + 1
            while j <= self.n:
                self.tree[i][j] += delta
                j += j & -j
            i += i & -i

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return (
            self._prefix(row2 + 1, col2 + 1)
            - self._prefix(row1, col2 + 1)
            - self._prefix(row2 + 1, col1)
            + self._prefix(row1, col1)
        )

    def _prefix(self, rows: int, cols: int) -> int:
        total = 0
        i = rows
        while i > 0:
            j = cols
            while j > 0:
                total += self.tree[i][j]
                j -= j & -j
            i -= i & -i
        return total
