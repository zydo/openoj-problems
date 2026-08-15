from typing import List, Optional


class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        edge_counts = {}
        for row in wall:
            position = 0
            for width in row[:-1]:
                position += width
                edge_counts[position] = edge_counts.get(position, 0) + 1
        best_edges = max(edge_counts.values(), default=0)
        return len(wall) - best_edges
