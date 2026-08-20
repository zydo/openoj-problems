import "math"

func minimumLargestGap(positions []int, k int) float64 {
	m := len(positions) - 1
	gaps := make([]float64, m)
	for i := 0; i < m; i++ {
		gaps[i] = float64(positions[i+1] - positions[i])
	}
	lo := 0.0
	hi := gaps[0]
	for i := 1; i < m; i++ {
		hi = math.Max(hi, gaps[i])
	}
	// Binary search the smallest feasible maximum distance.
	for it := 0; it < 60; it++ {
		mid := (lo + hi) / 2.0
		if mid <= 0.0 {
			hi = 0.0
			break
		}
		var needed int64
		for _, g := range gaps {
			needed += int64(math.Ceil(g/mid)) - 1
		}
		if needed <= int64(k) {
			hi = mid
		} else {
			lo = mid
		}
	}
	return hi
}
