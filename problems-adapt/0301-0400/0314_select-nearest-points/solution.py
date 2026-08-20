class Solution:
    def selectNearestPoints(self, points: list[list[int]], k: int) -> list[list[int]]:
        # Squared distance ranks points identically to the Euclidean
        # distance (sqrt is monotone) while staying integer-exact.
        ordered = sorted(points, key=lambda p: p[0] * p[0] + p[1] * p[1])
        return [list(point) for point in ordered[:k]]
