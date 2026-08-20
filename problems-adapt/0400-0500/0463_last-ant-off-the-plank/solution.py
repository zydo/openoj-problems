class Solution:
    def lastFall(self, n: int, left: list[int], right: list[int]) -> int:
        # Two ants bouncing off each other is indistinguishable from passing
        # through while swapping identities; the plank empties at a time that
        # depends only on positions, so collisions can be ignored.
        best = 0
        # A left-mover at position p needs p seconds to reach 0.
        for position in left:
            best = max(best, position)
        # A right-mover at p needs n - p seconds to reach n.
        for position in right:
            best = max(best, n - position)
        return best
