from typing import List, Optional


class Solution:
    def minimumTimeRequired(self, jobs: List[int], k: int) -> int:
        n = len(jobs)
        jobs = sorted(jobs, reverse=True)
        best = [sum(jobs)]
        loads = [0] * k

        def dfs(i):
            if i == n:
                current = max(loads)
                if current < best[0]:
                    best[0] = current
                return
            seen = set()
            for w in range(k):
                if loads[w] in seen:
                    continue
                seen.add(loads[w])
                if loads[w] + jobs[i] >= best[0]:
                    continue
                loads[w] += jobs[i]
                dfs(i + 1)
                loads[w] -= jobs[i]
                if loads[w] == 0:
                    break

        dfs(0)
        return best[0]
