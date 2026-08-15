from typing import List, Optional


class Solution:
    def distributeCookies(self, cookies: List[int], k: int) -> int:
        best = [float("inf")]
        children = [0] * k

        def backtrack(i, cur_max):
            if cur_max >= best[0]:
                return
            if i == len(cookies):
                best[0] = cur_max
                return
            tried = set()
            for j in range(k):
                if children[j] in tried:
                    continue
                tried.add(children[j])
                children[j] += cookies[i]
                backtrack(i + 1, max(cur_max, children[j]))
                children[j] -= cookies[i]

        backtrack(0, 0)
        return best[0]
