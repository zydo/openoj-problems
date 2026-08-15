import "sort"

func minimumTotalDistance(robot []int, factory [][]int) int64 {
	rob := append([]int(nil), robot...)
	sort.Ints(rob)
	type fac struct {
		pos   int64
		limit int
	}
	facList := make([]fac, len(factory))
	for i, f := range factory {
		facList[i] = fac{int64(f[0]), f[1]}
	}
	sort.Slice(facList, func(a, b int) bool {
		if facList[a].pos != facList[b].pos {
			return facList[a].pos < facList[b].pos
		}
		return facList[a].limit < facList[b].limit
	})
	n := len(rob)
	INF := int64(1) << 62
	dp := make([]int64, n+1)
	for i := range dp {
		dp[i] = INF
	}
	dp[0] = 0
	for _, f := range facList {
		pos, limit := f.pos, f.limit
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
			best := dp[i]
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
