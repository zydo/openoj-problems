from typing import List, Optional


class Solution:
    def subtreeInversionSum(
        self, edges: List[List[int]], nums: List[int], k: int
    ) -> int:
        n = len(nums)
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        parent = [-1] * n
        order = [0]
        parent[0] = -2
        for u in order:
            for v in adj[u]:
                if v != parent[u]:
                    parent[v] = u
                    order.append(v)

        width = k + 1
        dp = [None] * n
        for u in reversed(order):
            child_sum = [[0] * width for _ in range(2)]
            for v in adj[u]:
                if v == parent[u]:
                    continue
                cv = dp[v]
                for flip in range(2):
                    row = child_sum[flip]
                    crow = cv[flip]
                    for d in range(width):
                        row[d] += crow[d]

            table = [[0] * width for _ in range(2)]
            for flip in range(2):
                s = -1 if flip else 1
                base_dont = nums[u] * s
                base_inv = -nums[u] * s
                dont_row = child_sum[flip]
                inv_row = child_sum[flip ^ 1]
                for dist in range(width):
                    dd = dist + 1 if dist < k else k
                    val_dont = base_dont + dont_row[dd]
                    if dist >= k:
                        val_inv = base_inv + inv_row[1]
                        table[flip][dist] = val_dont if val_dont > val_inv else val_inv
                    else:
                        table[flip][dist] = val_dont
            dp[u] = table
        return dp[0][0][k]
