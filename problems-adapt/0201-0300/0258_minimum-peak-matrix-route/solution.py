import heapq


class Solution:
    def minimumRoutePeak(self, heights: list[list[int]]) -> int:
        n = len(heights)
        INF = float("inf")
        # A path's cost is the max elevation along it, and max is
        # monotone, so Dijkstra's greedy argument holds with max
        # relaxation. dist holds the smallest peak each cell is
        # route peak — the start contributes heights[0][0] itself.
        dist = [[INF] * n for _ in range(n)]
        dist[0][0] = heights[0][0]
        heap = [(heights[0][0], 0, 0)]
        while heap:
            t, r, c = heapq.heappop(heap)
            # First pop of the target is optimal: cells settle in order
            # of their true minimum peak.
            if r == n - 1 and c == n - 1:
                return t
            # Skip stale entries superseded by a smaller settled peak.
            if t > dist[r][c]:
                continue
            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < n and 0 <= nc < n:
                    # Extending a path can only keep or raise its peak.
                    nt = max(t, heights[nr][nc])
                    if nt < dist[nr][nc]:
                        dist[nr][nc] = nt
                        heapq.heappush(heap, (nt, nr, nc))
        return dist[n - 1][n - 1]
