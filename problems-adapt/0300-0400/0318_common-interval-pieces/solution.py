class Solution:
    def commonIntervalPieces(self, rangesA: list[list[int]], rangesB: list[list[int]]) -> list[list[int]]:
        result = []
        i = j = 0
        while i < len(rangesA) and j < len(rangesB):
            # The overlap of the two current intervals is [max starts,
            # min ends]; lo <= hi means they intersect (closed intervals,
            # so touching endpoints still count).
            lo = max(rangesA[i][0], rangesB[j][0])
            hi = min(rangesA[i][1], rangesB[j][1])
            if lo <= hi:
                result.append([lo, hi])
            # Retire the interval that ends earlier: later intervals in the
            # other list start strictly after its end, so it is done forever.
            if rangesA[i][1] < rangesB[j][1]:
                i += 1
            else:
                j += 1
        return result
