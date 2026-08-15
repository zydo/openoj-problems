from typing import List, Optional


class Solution:
    def survivedRobotsHealths(
        self, positions: List[int], healths: List[int], directions: str
    ) -> List[int]:
        healths = list(healths)
        n = len(positions)
        order = sorted(range(n), key=lambda i: positions[i])
        stack = []
        for idx in order:
            if directions[idx] == "R":
                stack.append(idx)
            else:
                alive = True
                while stack and directions[stack[-1]] == "R":
                    top = stack[-1]
                    if healths[top] < healths[idx]:
                        healths[idx] -= 1
                        stack.pop()
                    elif healths[top] > healths[idx]:
                        healths[top] -= 1
                        alive = False
                        break
                    else:
                        stack.pop()
                        alive = False
                        break
                if alive:
                    stack.append(idx)
        survivors = set(stack)
        return [healths[i] for i in range(n) if i in survivors]
