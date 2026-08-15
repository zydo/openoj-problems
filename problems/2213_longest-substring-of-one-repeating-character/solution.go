func longestRepeating(s string, queryCharacters string, queryIndices []int) []int {
	n := len(s)
	if n == 0 {
		return []int{}
	}

	pref := make([]int, 4*n)
	suf := make([]int, 4*n)
	best := make([]int, 4*n)
	segLen := make([]int, 4*n)
	leftChar := make([]byte, 4*n)
	rightChar := make([]byte, 4*n)
	chars := []byte(s)

	var pull func(node int)
	var build func(node, lo, hi int)
	var update func(node, lo, hi, pos int, ch byte)

	pull = func(node int) {
		l, r := 2*node, 2*node+1
		segLen[node] = segLen[l] + segLen[r]
		leftChar[node] = leftChar[l]
		rightChar[node] = rightChar[r]
		if pref[l] == segLen[l] && leftChar[l] == leftChar[r] {
			pref[node] = pref[l] + pref[r]
		} else {
			pref[node] = pref[l]
		}
		if suf[r] == segLen[r] && rightChar[r] == rightChar[l] {
			suf[node] = suf[r] + suf[l]
		} else {
			suf[node] = suf[r]
		}
		joined := 0
		if rightChar[l] == leftChar[r] {
			joined = suf[l] + pref[r]
		}
		m := best[l]
		if best[r] > m {
			m = best[r]
		}
		if joined > m {
			m = joined
		}
		best[node] = m
	}

	build = func(node, lo, hi int) {
		if lo == hi {
			pref[node], suf[node], best[node] = 1, 1, 1
			segLen[node] = 1
			leftChar[node] = chars[lo]
			rightChar[node] = chars[lo]
			return
		}
		mid := (lo + hi) / 2
		build(2*node, lo, mid)
		build(2*node+1, mid+1, hi)
		pull(node)
	}

	update = func(node, lo, hi, pos int, ch byte) {
		if lo == hi {
			chars[pos] = ch
			leftChar[node] = ch
			rightChar[node] = ch
			return
		}
		mid := (lo + hi) / 2
		if pos <= mid {
			update(2*node, lo, mid, pos, ch)
		} else {
			update(2*node+1, mid+1, hi, pos, ch)
		}
		pull(node)
	}

	build(1, 0, n-1)
	result := make([]int, 0, len(queryIndices))
	for i, idx := range queryIndices {
		update(1, 0, n-1, idx, queryCharacters[i])
		result = append(result, best[1])
	}
	return result
}
