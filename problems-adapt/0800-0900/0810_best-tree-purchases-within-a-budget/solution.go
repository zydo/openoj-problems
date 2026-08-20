func bestTreePurchases(n int, price []int, reward []int, edges [][]int, budget int) int {
	children := make([][]int, n)
	for _, e := range edges {
		children[e[0]-1] = append(children[e[0]-1], e[1]-1)
	}

	// Knapsack merge of the children's budget profiles: spend t in one child
	// against every budget level b, then a prefix maximum so leftover budget
	// never lowers a value.
	var combine func(kids []int, tables [][]int) []int
	combine = func(kids []int, tables [][]int) []int {
		cur := make([]int, budget+1)
		for _, child := range kids {
			arr := tables[child]
			nxt := make([]int, budget+1)
			copy(nxt, cur)
			for b := 0; b <= budget; b++ {
				cb := cur[b]
				for t := 0; t+b <= budget; t++ {
					val := cb + arr[t]
					if val > nxt[b+t] {
						nxt[b+t] = val
					}
				}
			}
			cur = nxt
			for b := 1; b <= budget; b++ {
				if cur[b] < cur[b-1] {
					cur[b] = cur[b-1]
				}
			}
		}
		return cur
	}

	// BFS order lets every node's children finish before the node itself.
	order := make([]int, 0, n)
	order = append(order, 0)
	for i := 0; i < len(order); i++ {
		order = append(order, children[order[i]]...)
	}

	// f[u][b]: best profit in u's subtree within budget b when u's parent did
	// not buy (u pays the full price); g[u][b]: the parent did buy (u may pay
	// half). The discount depends only on the direct parent, so two profiles
	// are enough.
	f := make([][]int, n)
	g := make([][]int, n)
	for idx := n - 1; idx >= 0; idx-- {
		u := order[idx]
		childF := combine(children[u], f)
		childG := combine(children[u], g)

		// If u does not buy, its children get no discount, so both tables
		// start from merged childF. Buying switches to childG (children
		// become discount-eligible) at the full or halved cost respectively.
		fu := make([]int, budget+1)
		gu := make([]int, budget+1)
		copy(fu, childF)
		copy(gu, childF)
		costFull := price[u]
		costDisc := price[u] / 2
		profitFull := reward[u] - costFull
		profitDisc := reward[u] - costDisc
		for b := 0; b <= budget; b++ {
			if b >= costFull {
				val := childG[b-costFull] + profitFull
				if val > fu[b] {
					fu[b] = val
				}
			}
			if b >= costDisc {
				val := childG[b-costDisc] + profitDisc
				if val > gu[b] {
					gu[b] = val
				}
			}
		}
		// Re-apply a prefix maximum after folding in u's own purchase.
		for b := 1; b <= budget; b++ {
			if fu[b] < fu[b-1] {
				fu[b] = fu[b-1]
			}
			if gu[b] < gu[b-1] {
				gu[b] = gu[b-1]
			}
		}
		f[u] = fu
		g[u] = gu
	}
	// The root has no parent and therefore never gets a discount.
	return f[0][budget]
}
