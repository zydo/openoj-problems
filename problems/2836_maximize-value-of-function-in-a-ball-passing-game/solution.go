func getMaxFunctionValue(receiver []int, k int64) int64 {
	n := len(receiver)
	log := 0
	for tmp := k; tmp > 0; tmp >>= 1 {
		log++
	}
	up := make([][]int, log)
	sm := make([][]int64, log)
	for j := range up {
		up[j] = make([]int, n)
		sm[j] = make([]int64, n)
	}
	for x := 0; x < n; x++ {
		up[0][x] = receiver[x]
		sm[0][x] = int64(receiver[x])
	}
	for j := 1; j < log; j++ {
		for x := 0; x < n; x++ {
			mid := up[j-1][x]
			up[j][x] = up[j-1][mid]
			sm[j][x] = sm[j-1][x] + sm[j-1][mid]
		}
	}
	var best int64
	for x := 0; x < n; x++ {
		total := int64(x)
		cur := x
		remaining := k
		bit := 0
		for remaining > 0 {
			if remaining&1 == 1 {
				total += sm[bit][cur]
				cur = up[bit][cur]
			}
			remaining >>= 1
			bit++
		}
		if total > best {
			best = total
		}
	}
	return best
}
