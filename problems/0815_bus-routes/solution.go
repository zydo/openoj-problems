func numBusesToDestination(routes [][]int, source int, target int) int {
	if source == target {
		return 0
	}
	stopToRoutes := make(map[int][]int)
	for r, stops := range routes {
		for _, s := range stops {
			stopToRoutes[s] = append(stopToRoutes[s], r)
		}
	}
	if _, ok := stopToRoutes[source]; !ok {
		return -1
	}
	if _, ok := stopToRoutes[target]; !ok {
		return -1
	}
	usedRoutes := make(map[int]bool)
	seenStops := make(map[int]bool)
	seenStops[source] = true
	type node struct {
		stop  int
		buses int
	}
	queue := []node{{source, 0}}
	head := 0
	for head < len(queue) {
		cur := queue[head]
		head++
		for _, r := range stopToRoutes[cur.stop] {
			if usedRoutes[r] {
				continue
			}
			usedRoutes[r] = true
			for _, nxt := range routes[r] {
				if nxt == target {
					return cur.buses + 1
				}
				if !seenStops[nxt] {
					seenStops[nxt] = true
					queue = append(queue, node{nxt, cur.buses + 1})
				}
			}
		}
	}
	return -1
}
