func countDifferentSubsequenceGCDs(nums []int) int {
	maxVal := 0
	for _, v := range nums {
		if v > maxVal {
			maxVal = v
		}
	}
	present := make([]bool, maxVal+1)
	for _, v := range nums {
		present[v] = true
	}
	gcd := func(a, b int) int {
		for b != 0 {
			a, b = b, a%b
		}
		return a
	}
	count := 0
	for g := 1; g <= maxVal; g++ {
		running := 0
		for multiple := g; multiple <= maxVal; multiple += g {
			if present[multiple] {
				running = gcd(running, multiple)
				if running == g {
					count++
					break
				}
			}
		}
	}
	return count
}
