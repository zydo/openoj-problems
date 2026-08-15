func myPow(x float64, n int) float64 {
	power := func(base float64, exp int64) float64 {
		result := 1.0
		for exp != 0 {
			if exp&1 == 1 {
				result *= base
			}
			base *= base
			exp >>= 1
		}
		return result
	}
	exp := int64(n)
	if exp < 0 {
		return 1.0 / power(x, -exp)
	}
	return power(x, exp)
}
