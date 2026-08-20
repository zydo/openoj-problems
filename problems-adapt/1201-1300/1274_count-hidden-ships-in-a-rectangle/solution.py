class Solution:
    def countHiddenShips(self, ocean: Ocean, topRight: list[int], bottomLeft: list[int]) -> int:
        # A split can hand a child an empty rectangle; reject it without
        # spending a query.
        if bottomLeft[0] > topRight[0] or bottomLeft[1] > topRight[1]:
            return 0
        # One query retires the whole subtree when the box is empty water.
        if not ocean.hasShips(topRight, bottomLeft):
            return 0
        # A single point that answered yes holds exactly one ship.
        if topRight[0] == bottomLeft[0] and topRight[1] == bottomLeft[1]:
            return 1

        mid_x = (topRight[0] + bottomLeft[0]) // 2
        mid_y = (topRight[1] + bottomLeft[1]) // 2
        return (
            self.countHiddenShips(ocean, [mid_x, mid_y], bottomLeft)
            + self.countHiddenShips(ocean, [mid_x, topRight[1]], [bottomLeft[0], mid_y + 1])
            + self.countHiddenShips(ocean, [topRight[0], mid_y], [mid_x + 1, bottomLeft[1]])
            + self.countHiddenShips(ocean, topRight, [mid_x + 1, mid_y + 1])
        )
