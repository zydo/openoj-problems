func countPrimes(n int) int {
	if n < 3 {
		return 0
	}
	isComposite := make([]bool, n)
	count := 0
	for i := 2; i < n; i++ {
		if !isComposite[i] {
			count++
			if i*i < n {
				for j := i * i; j < n; j += i {
					isComposite[j] = true
				}
			}
		}
	}
	return count
}
