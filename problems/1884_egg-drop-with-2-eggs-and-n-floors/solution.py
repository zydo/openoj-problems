class Solution:
    def twoEggDrop(self, n: int) -> int:
        cover = 0
        moves = 0
        while cover < n:
            moves += 1
            cover += moves
        return moves
