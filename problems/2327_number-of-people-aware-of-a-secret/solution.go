func peopleAwareOfSecret(n int, delay int, forget int) int {
	const MOD = 1000000007
	know := make([]int64, n+1)
	know[1] = 1
	for day := 2; day <= n; day++ {
		var total int64
		lo := day - forget + 1
		if lo < 1 {
			lo = 1
		}
		hi := day - delay
		for d := lo; d <= hi; d++ {
			total += know[d]
		}
		know[day] = total % MOD
	}
	var answer int64
	for d := n - forget + 1; d <= n; d++ {
		answer += know[d]
	}
	return int(answer % MOD)
}
