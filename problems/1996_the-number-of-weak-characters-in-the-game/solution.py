from typing import List, Optional


class Solution:
    def numberOfWeakCharacters(self, properties: List[List[int]]) -> int:
        props = sorted(properties, key=lambda p: (-p[0], p[1]))
        weak = 0
        max_defense = 0
        for _, defense in props:
            if defense < max_defense:
                weak += 1
            else:
                max_defense = defense
        return weak
