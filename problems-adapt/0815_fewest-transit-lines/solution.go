func fewestTransitLines(lines [][]int, startStop int, endStop int) int {
	// Early exits: same stop needs no line; an endpoint on no route
	// has no path.
	if startStop == endStop {
		return 0
	}
	// Map each stop to the lines passing through it.
	stopToRoutes := make(map[int][]int)
	for r, stops := range lines {
		for _, s := range stops {
			stopToRoutes[s] = append(stopToRoutes[s], r)
		}
	}
	if _, ok := stopToRoutes[startStop]; !ok {
		return -1
	}
	if _, ok := stopToRoutes[endStop]; !ok {
		return -1
	}
	usedRoutes := make(map[int]bool)
	seenStops := make(map[int]bool)
	seenStops[startStop] = true
	type node struct {
		stop  int
		rides int
	}
	queue := []node{{startStop, 0}}
	head := 0
	for head < len(queue) {
		cur := queue[head]
		head++
		for _, r := range stopToRoutes[cur.stop] {
			// BFS over stops: boarding a route reaches all its
			// stops one level deeper. Expand each route only once
			// ever — re-boarding can only revisit stops already
			// found at an equal or smaller ride count.
			if usedRoutes[r] {
				continue
			}
			usedRoutes[r] = true
			for _, nxt := range lines[r] {
				// The endStop is counted on sight — no need to
				// enqueue it.
				if nxt == endStop {
					return cur.rides + 1
				}
				if !seenStops[nxt] {
					seenStops[nxt] = true
					queue = append(queue, node{nxt, cur.rides + 1})
				}
			}
		}
	}
	return -1
}
