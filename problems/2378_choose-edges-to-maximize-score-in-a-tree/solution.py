from typing import List, Optional


class Solution:
    def maxScore(self, edges: List[List[int]]) -> int:
        n = len(edges)
        if n == 1:
            return 0
        children = [[] for _ in range(n)]
        for i in range(1, n):
            children[edges[i][0]].append(i)
        order = []
        stack = [0]
        while stack:
            u = stack.pop()
            order.append(u)
            stack.extend(children[u])
        dp0 = [0] * n  # parent edge not chosen
        dp1 = [0] * n  # parent edge chosen (weight accounted by the parent)
        for u in reversed(order):
            base = 0
            best_gain = 0
            for c in children[u]:
                w = edges[c][1]
                base += dp0[c]
                gain = dp1[c] + w - dp0[c]
                if gain > best_gain:
                    best_gain = gain
            dp0[u] = base + best_gain
            dp1[u] = base
        return dp0[0]
