func maxPoints(points [][]int) int64 {
	m := len(points)
	n := len(points[0])
	prev := make([]int64, n)
	for c := 0; c < n; c++ {
		prev[c] = int64(points[0][c])
	}
	left := make([]int64, n)
	right := make([]int64, n)
	for r := 1; r < m; r++ {
		best := prev[0] + 0
		for c := 0; c < n; c++ {
			if prev[c]+int64(c) > best {
				best = prev[c] + int64(c)
			}
			left[c] = best
		}
		best = prev[n-1] - int64(n-1)
		for c := n - 1; c >= 0; c-- {
			if prev[c]-int64(c) > best {
				best = prev[c] - int64(c)
			}
			right[c] = best
		}
		for c := 0; c < n; c++ {
			l := left[c] - int64(c)
			rr := right[c] + int64(c)
			b := l
			if rr > b {
				b = rr
			}
			prev[c] = int64(points[r][c]) + b
		}
	}
	ans := prev[0]
	for c := 1; c < n; c++ {
		if prev[c] > ans {
			ans = prev[c]
		}
	}
	return ans
}
