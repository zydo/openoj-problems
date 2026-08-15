from typing import List, Optional


class Solution:
    def addOperators(self, num: str, target: int) -> List[str]:
        n = len(num)
        results = []

        def dfs(index, prev, current, expression):
            if index == n:
                if current == target:
                    results.append(expression)
                return
            for end in range(index, n):
                if end != index and num[index] == "0":
                    break
                nxt = int(num[index : end + 1])
                if index == 0:
                    dfs(end + 1, nxt, nxt, str(nxt))
                else:
                    dfs(end + 1, nxt, current + nxt, expression + "+" + str(nxt))
                    dfs(end + 1, -nxt, current - nxt, expression + "-" + str(nxt))
                    dfs(
                        end + 1,
                        prev * nxt,
                        current - prev + prev * nxt,
                        expression + "*" + str(nxt),
                    )

        dfs(0, 0, 0, "")
        return results
