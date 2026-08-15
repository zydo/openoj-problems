func leftmostBuildingQueries(heights []int, queries [][]int) []int {
	n := len(heights)
	size := 1
	for size < n {
		size <<= 1
	}
	seg := make([]int64, 2*size)
	for i := 0; i < n; i++ {
		seg[size+i] = int64(heights[i])
	}
	for i := size - 1; i >= 1; i-- {
		seg[i] = max2940(seg[2*i], seg[2*i+1])
	}

	result := make([]int, 0, len(queries))
	for _, qr := range queries {
		a, b := qr[0], qr[1]
		if a > b {
			a, b = b, a
		}
		if a == b {
			result = append(result, a)
		} else if heights[a] < heights[b] {
			result = append(result, b)
		} else {
			threshold := int64(heights[a])
			if int64(heights[b]) > threshold {
				threshold = int64(heights[b])
			}
			result = append(result, findFirst2940(seg, 1, 0, size, b+1, n, threshold))
		}
	}
	return result
}

func max2940(a, b int64) int64 {
	if a > b {
		return a
	}
	return b
}

func findFirst2940(seg []int64, node int, nl int, nr int, ql int, qr int, threshold int64) int {
	if nr <= ql || qr <= nl || seg[node] <= threshold {
		return -1
	}
	if nr-nl == 1 {
		return nl
	}
	mid := (nl + nr) / 2
	res := findFirst2940(seg, 2*node, nl, mid, ql, qr, threshold)
	if res != -1 {
		return res
	}
	return findFirst2940(seg, 2*node+1, mid, nr, ql, qr, threshold)
}
