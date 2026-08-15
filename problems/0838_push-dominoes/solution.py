from typing import List, Optional


class Solution:
    def pushDominoes(self, dominoes: str) -> str:
        n = len(dominoes)
        forces = [0] * n
        f = 0
        for i in range(n):
            if dominoes[i] == "R":
                f = n
            elif dominoes[i] == "L":
                f = 0
            else:
                f = max(f - 1, 0)
            forces[i] += f
        f = 0
        for i in range(n - 1, -1, -1):
            if dominoes[i] == "L":
                f = n
            elif dominoes[i] == "R":
                f = 0
            else:
                f = max(f - 1, 0)
            forces[i] -= f
        return "".join(
            "." if forces[i] == 0 else ("R" if forces[i] > 0 else "L") for i in range(n)
        )
