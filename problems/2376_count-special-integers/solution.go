import "strconv"

func countSpecialNumbers(n int64) int {
	perm := func(a int64, k int64) int64 {
		p := int64(1)
		for i := int64(0); i < k; i++ {
			p *= a - i
		}
		return p
	}

	s := strconv.FormatInt(n, 10)
	L := len(s)
	total := int64(0)
	for k := int64(1); k < int64(L); k++ {
		total += 9 * perm(9, k-1)
	}
	used := 0
	broke := false
	for i := 0; i < L; i++ {
		d := int(s[i] - '0')
		lo := 0
		if i == 0 {
			lo = 1
		}
		for x := lo; x < d; x++ {
			if used>>uint(x)&1 == 0 {
				total += perm(int64(10-(i+1)), int64(L-i-1))
			}
		}
		if used>>uint(d)&1 == 1 {
			broke = true
			break
		}
		used |= 1 << uint(d)
	}
	if !broke {
		total++
	}
	return int(total)
}
