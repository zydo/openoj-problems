func maxProfit(k int, prices []int) int64 {
	n := len(prices)
	if n < 2 || k == 0 {
		return 0
	}
	if k >= n/2 {
		// The limit can never bind: sum every upward move.
		total := int64(0)
		for i := 1; i < n; i++ {
			if diff := prices[i] - prices[i-1]; diff > 0 {
				total += int64(diff)
			}
		}
		return total
	}
	neg := -(int64(1) << 60)
	buy := make([]int64, k+1)
	sell := make([]int64, k+1)
	for j := range buy {
		buy[j] = neg
	}
	for _, price := range prices {
		for j := 1; j <= k; j++ {
			if v := sell[j-1] - int64(price); v > buy[j] {
				buy[j] = v
			}
			if v := buy[j] + int64(price); v > sell[j] {
				sell[j] = v
			}
		}
	}
	return sell[k]
}
