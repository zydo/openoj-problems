class Solution:
    def leastCostToSupplyAll(self, n: int, sources: list[int], links: list[list[int]]) -> int:
        # Kruskal over sites 1..n plus a virtual node 0 (source edges).
        edges = []
        for i in range(n):
            edges.append((sources[i], 0, i + 1))
        for house1, house2, cost in links:
            edges.append((cost, house1, house2))
        edges.sort()

        parent = list(range(n + 1))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        total = 0
        used = 0
        for cost, a, b in edges:
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[ra] = rb
                total += cost
                used += 1
                if used == n:
                    break
        return total
