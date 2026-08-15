func maximizeSweetness(sweetness []int, k int) int {
	total := 0
	for _, value := range sweetness {
		total += value
	}

	lo, hi := 1, total/(k+1)
	best := 0
	for lo <= hi {
		mid := (lo + hi) / 2
		if piecesAtLeast(sweetness, mid) >= k+1 {
			best = mid
			lo = mid + 1
		} else {
			hi = mid - 1
		}
	}
	return best
}

func piecesAtLeast(sweetness []int, target int) int {
	count := 0
	current := 0
	for _, value := range sweetness {
		current += value
		if current >= target {
			count++
			current = 0
		}
	}
	return count
}
