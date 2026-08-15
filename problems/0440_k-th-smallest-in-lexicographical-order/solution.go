func findKthNumber(n int, k int) int {
	countSteps := func(n1, n2 int64) int64 {
		nn := int64(n)
		var steps int64 = 0
		for n1 <= nn {
			steps += min(nn+1, n2) - n1
			n1 *= 10
			n2 *= 10
		}
		return steps
	}

	var cur int64 = 1
	var kk int64 = int64(k) - 1
	for kk > 0 {
		steps := countSteps(cur, cur+1)
		if steps <= kk {
			cur++
			kk -= steps
		} else {
			cur *= 10
			kk--
		}
	}
	return int(cur)
}
