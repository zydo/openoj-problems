class Solution:
    def countDominatedPoints(self, points: list[list[int]]) -> int:
        # x descending; y ASCENDING within equal x so that equal-x points
        # (which can never dominate each other) only ever meet a running
        # max from strictly larger-x groups.
        props = sorted(points, key=lambda p: (-p[0], p[1]))
        dominated = 0
        # Every earlier point has x >= the current one's, so the current
        # one is dominated exactly when some seen y is strictly greater
        # -- one running maximum is enough.
        max_y = 0
        for _, y in props:
            if y < max_y:
                dominated += 1
            else:
                # Raise the max only when not dominated, so later
                # (smaller-x) groups compare against it.
                max_y = y
        return dominated
