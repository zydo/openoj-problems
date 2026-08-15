// fpAdd adds two float64s without letting the compiler fuse the surrounding
// multiplications into an FMA (which would round differently from the
// two-rounding reference arithmetic).
//
//go:noinline
func fpAdd(a, b float64) float64 { return a + b }

func probabilityOfHeads(prob []float64, target int) float64 {
	dp := make([]float64, target+1)
	dp[0] = 1.0
	for _, p := range prob {
		for c := target; c > 0; c-- {
			dp[c] = fpAdd(dp[c]*(1-p), dp[c-1]*p)
		}
		dp[0] *= 1 - p
	}
	return dp[target]
}
