func nthUglyNumber(n int) int {
	ugly := make([]int, n+1)
	ugly[0] = 1
	i2, i3, i5 := 0, 0, 0
	for i := 1; i <= n; i++ {
		m2, m3, m5 := ugly[i2]*2, ugly[i3]*3, ugly[i5]*5
		nxt := m2
		if m3 < nxt {
			nxt = m3
		}
		if m5 < nxt {
			nxt = m5
		}
		ugly[i] = nxt
		if nxt == m2 {
			i2++
		}
		if nxt == m3 {
			i3++
		}
		if nxt == m5 {
			i5++
		}
	}
	return ugly[n-1]
}
