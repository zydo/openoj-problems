import (
	"strconv"
	"strings"
)

func encode(s string) string {
	n := len(s)
	dp := make([][]string, n)
	for i := range dp {
		dp[i] = make([]string, n)
	}
	for length := 1; length <= n; length++ {
		for i := 0; i+length <= n; i++ {
			j := i + length - 1
			substr := s[i : j+1]
			best := substr
			for k := i; k < j; k++ {
				candidate := dp[i][k] + dp[k+1][j]
				if len(candidate) < len(best) {
					best = candidate
				}
			}
			compression := ""
			hasCompression := false
			for p := 1; p < length; p++ {
				if length%p == 0 {
					pattern := s[i : i+p]
					if strings.Repeat(pattern, length/p) == substr {
						encoded := strconv.Itoa(length/p) + "[" + dp[i][i+p-1] + "]"
						if !hasCompression || len(encoded) < len(compression) {
							compression = encoded
							hasCompression = true
						}
					}
				}
			}
			if hasCompression {
				if len(compression) < len(best) ||
					(len(compression) == len(best) && best != substr) {
					best = compression
				}
			}
			dp[i][j] = best
		}
	}
	return dp[0][n-1]
}
