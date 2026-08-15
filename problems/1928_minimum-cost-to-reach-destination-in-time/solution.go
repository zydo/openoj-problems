func minCost(maxTime int, edges [][]int, passingFees []int) int {
	n := len(passingFees)
	const INF = 1 << 30
	layers := make([][]int, maxTime+1)
	start := make([]int, n)
	for v := range start {
		start[v] = INF
	}
	start[0] = passingFees[0]
	layers[0] = start
	for t := 1; t <= maxTime; t++ {
		cur := make([]int, n)
		for v := range cur {
			cur[v] = INF
		}
		for _, e := range edges {
			x, y, dt := e[0], e[1], e[2]
			if dt > t {
				continue
			}
			prev := layers[t-dt]
			if prev[x] < INF && prev[x]+passingFees[y] < cur[y] {
				cur[y] = prev[x] + passingFees[y]
			}
			if prev[y] < INF && prev[y]+passingFees[x] < cur[x] {
				cur[x] = prev[y] + passingFees[x]
			}
		}
		layers[t] = cur
	}
	best := INF
	for _, layer := range layers {
		if layer[n-1] < best {
			best = layer[n-1]
		}
	}
	if best >= INF {
		return -1
	}
	return best
}
