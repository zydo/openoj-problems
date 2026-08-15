func firstDayBeenInAllRooms(nextVisit []int) int {
	const MOD = 1_000_000_007
	n := len(nextVisit)
	f := make([]int64, n)
	for i := 1; i < n; i++ {
		f[i] = ((2*f[i-1]-f[nextVisit[i-1]]+2)%MOD + MOD) % MOD
	}
	return int(f[n-1])
}
