import "math"

func boundedFinalScoreProbability(scoreLimit int, stopScore int, drawMaximum int) float64 {
	if stopScore == 0 || scoreLimit >= stopScore-1+drawMaximum {
		return 1.0
	}
	// dp[i] = probability of ever holding exactly i points.
	dp := make([]float64, scoreLimit+1)
	dp[0] = 1.0
	window := 1.0 // sum of dp[max(0, i - drawMaximum) .. i - 1]
	for i := 1; i <= scoreLimit; i++ {
		dp[i] = window / float64(drawMaximum)
		if i < stopScore {
			window += dp[i]
		}
		if i-drawMaximum >= 0 {
			window -= dp[i-drawMaximum]
		}
	}
	// Compensated (Neumaier) summation, matching the reference's built-in sum().
	result := 0.0
	c := 0.0
	for i := stopScore; i <= scoreLimit; i++ {
		x := dp[i]
		t := result + x
		if math.Abs(result) >= math.Abs(x) {
			c += (result - t) + x
		} else {
			c += (x - t) + result
		}
		result = t
	}
	return result + c
}
