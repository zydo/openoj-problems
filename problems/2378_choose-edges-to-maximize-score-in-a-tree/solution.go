func maxScore(edges [][]int) int64 {
	n := len(edges)
	if n == 1 {
		return 0
	}
	children := make([][]int, n)
	for i := 1; i < n; i++ {
		p := edges[i][0]
		children[p] = append(children[p], i)
	}
	order := make([]int, 0, n)
	stack := []int{0}
	for len(stack) > 0 {
		u := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		order = append(order, u)
		stack = append(stack, children[u]...)
	}
	dp0 := make([]int64, n)
	dp1 := make([]int64, n)
	for oi := len(order) - 1; oi >= 0; oi-- {
		u := order[oi]
		var base int64
		var bestGain int64
		for _, c := range children[u] {
			w := int64(edges[c][1])
			base += dp0[c]
			gain := dp1[c] + w - dp0[c]
			if gain > bestGain {
				bestGain = gain
			}
		}
		dp0[u] = base + bestGain
		dp1[u] = base
	}
	return dp0[0]
}
