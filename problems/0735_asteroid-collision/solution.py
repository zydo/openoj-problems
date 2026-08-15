from typing import List, Optional


class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack: List[int] = []
        for asteroid in asteroids:
            alive = True
            while alive and stack and asteroid < 0 < stack[-1]:
                top = stack[-1]
                if top < -asteroid:
                    stack.pop()
                elif top == -asteroid:
                    stack.pop()
                    alive = False
                else:
                    alive = False
            if alive:
                stack.append(asteroid)
        return stack
