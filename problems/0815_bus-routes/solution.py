from typing import List, Optional


class Solution:
    def numBusesToDestination(
        self, routes: List[List[int]], source: int, target: int
    ) -> int:
        if source == target:
            return 0
        stop_to_routes = {}
        for r, stops in enumerate(routes):
            for s in stops:
                stop_to_routes.setdefault(s, []).append(r)
        if source not in stop_to_routes or target not in stop_to_routes:
            return -1
        used_routes = set()
        seen_stops = {source}
        queue = [(source, 0)]
        head = 0
        while head < len(queue):
            stop, buses = queue[head]
            head += 1
            for r in stop_to_routes.get(stop, []):
                if r in used_routes:
                    continue
                used_routes.add(r)
                for nxt in routes[r]:
                    if nxt == target:
                        return buses + 1
                    if nxt not in seen_stops:
                        seen_stops.add(nxt)
                        queue.append((nxt, buses + 1))
        return -1
