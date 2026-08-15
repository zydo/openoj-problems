func maxTotalFruits(fruits [][]int, startPos int, k int) int64 {
	n := len(fruits)
	prefix := make([]int64, n+1)
	for i, f := range fruits {
		prefix[i+1] = prefix[i] + int64(f[1])
	}

	windowCost := func(leftPos, rightPos int) int64 {
		if startPos <= leftPos {
			return int64(rightPos - startPos)
		}
		if startPos >= rightPos {
			return int64(startPos - leftPos)
		}
		a := int64(2*(startPos-leftPos) + (rightPos - startPos))
		b := int64(2*(rightPos-startPos) + (startPos - leftPos))
		if a < b {
			return a
		}
		return b
	}

	var best int64
	left := 0
	for right := 0; right < n; right++ {
		for left < right && windowCost(fruits[left][0], fruits[right][0]) > int64(k) {
			left++
		}
		if windowCost(fruits[left][0], fruits[right][0]) <= int64(k) {
			sum := prefix[right+1] - prefix[left]
			if sum > best {
				best = sum
			}
		}
	}
	return best
}
