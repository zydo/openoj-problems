from typing import List, Optional


class Solution:
    def collisionSurvivors(self, movers: List[int]) -> List[int]:
        # The stack holds survivors — internally stable, all collisions resolved.
        stack: List[int] = []
        for mover in movers:
            alive = True
            # A newcomer can only fight the top, and only when it moves left
            # against a right-moving survivor; other pairs never meet.
            while alive and stack and mover < 0 < stack[-1]:
                top = stack[-1]
                if top < -mover:
                    # Top explodes; the newcomer continues against the new top.
                    stack.pop()
                elif top == -mover:
                    # Equal sizes: both explode.
                    stack.pop()
                    alive = False
                else:
                    # Top is larger: the newcomer explodes.
                    alive = False
            if alive:
                stack.append(mover)
        return stack
