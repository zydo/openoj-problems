class Solution:
    def countTriangles(self, sides: list[int]) -> int:
        sides = sorted(sides)
        n = len(sides)
        count = 0
        # Fix the largest side; sorted order leaves a + b > c as the only check needed.
        for i in range(n - 1, 1, -1):
            # First zero seen from the top means every remaining side is 0 too.
            if sides[i] == 0:
                break
            lo, hi = 0, i - 1
            while lo < hi:
                if sides[lo] + sides[hi] > sides[i]:
                    # Sum already suffices at the leftmost lo, so every index
                    # up to hi - 1 also pairs with hi: hi - lo triplets at once.
                    count += hi - lo
                    hi -= 1
                else:
                    # Too small even at the rightmost partner; only lo can move up.
                    lo += 1
        return count
