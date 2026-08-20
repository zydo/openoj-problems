class Solution:
    def fewestTransitLines(self, lines: list[list[int]], startStop: int, endStop: int) -> int:
        # Early exits: same stop needs no line; an endpoint on no route
        # has no path.
        if startStop == endStop:
            return 0
        # Map each stop to the lines passing through it.
        stop_to_routes = {}
        for r, stops in enumerate(lines):
            for s in stops:
                stop_to_routes.setdefault(s, []).append(r)
        if startStop not in stop_to_routes or endStop not in stop_to_routes:
            return -1
        used_routes = set()
        seen_stops = {startStop}
        queue = [(startStop, 0)]
        head = 0
        while head < len(queue):
            stop, rides = queue[head]
            head += 1
            for r in stop_to_routes.get(stop, []):
                # BFS over stops: boarding a route reaches all its
                # stops one level deeper. Expand each route only once
                # ever — re-boarding can only revisit stops already
                # found at an equal or smaller ride count.
                if r in used_routes:
                    continue
                used_routes.add(r)
                for nxt in lines[r]:
                    # The endStop is counted on sight — no need to
                    # enqueue it.
                    if nxt == endStop:
                        return rides + 1
                    if nxt not in seen_stops:
                        seen_stops.add(nxt)
                        queue.append((nxt, rides + 1))
        return -1
