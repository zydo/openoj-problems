import "sort"

func leastTotalTravel(units []int, stations [][]int) int64 {
	rob := append([]int(nil), units...)
	sort.Ints(rob)
	type fac struct {
		pos   int64
		limit int
	}
	facList := make([]fac, len(stations))
	for i, f := range stations {
		facList[i] = fac{int64(f[0]), f[1]}
	}
	sort.Slice(facList, func(a, b int) bool {
		if facList[a].pos != facList[b].pos {
			return facList[a].pos < facList[b].pos
		}
		return facList[a].limit < facList[b].limit
	})
	// Optimal plans are non-crossing (triangle inequality), so after
	// sorting, each station serves a contiguous block of units in order.
	n := len(rob)
	INF := int64(1) << 62
	// dp[i] = min distance to serve the first i units with the
	// stations processed so far; only i = 0 is reachable initially.
	dp := make([]int64, n+1)
	for i := range dp {
		dp[i] = INF
	}
	dp[0] = 0
	for _, f := range facList {
		pos, limit := f.pos, f.limit
		// pref[i] = sum of |units[j] - pos| for j < i: prefix differences
		// give any contiguous block's distance to this station.
		pref := make([]int64, n+1)
		for i := 0; i < n; i++ {
			d := int64(rob[i]) - pos
			if d < 0 {
				d = -d
			}
			pref[i+1] = pref[i] + d
		}
		ndp := append([]int64(nil), dp...)
		for i := 1; i <= n; i++ {
			// dp[i] carried over = skip this station (zero assignments).
			best := dp[i]
			// This station absorbs the trailing t units i-t..i-1.
			maxT := limit
			if i < maxT {
				maxT = i
			}
			for t := 1; t <= maxT; t++ {
				if dp[i-t] == INF {
					continue
				}
				val := dp[i-t] + pref[i] - pref[i-t]
				if val < best {
					best = val
				}
			}
			ndp[i] = best
		}
		dp = ndp
	}
	return dp[n]
}
