from typing import List


class Solution:
    def numIslands2(self, m: int, n: int, positions: List[List[int]]) -> List[int]:
        parent = list(range(m * n))
        size = [1] * (m * n)
        land = [False] * (m * n)

        def find(x: int) -> int:
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        count = 0
        answer = []
        for r, c in positions:
            cell = r * n + c
            if land[cell]:
                answer.append(count)
                continue
            land[cell] = True
            count += 1
            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and land[nr * n + nc]:
                    ra, rb = find(cell), find(nr * n + nc)
                    if ra != rb:
                        if size[ra] < size[rb]:
                            ra, rb = rb, ra
                        parent[rb] = ra
                        size[ra] += size[rb]
                        count -= 1
            answer.append(count)
        return answer
