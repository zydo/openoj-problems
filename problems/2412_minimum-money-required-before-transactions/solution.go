func minimumMoney(transactions [][]int) int64 {
	totalLose := int64(0)
	maxCashbackLosing := int64(0)
	maxCostWinning := int64(0)
	for _, t := range transactions {
		cost := int64(t[0])
		cashback := int64(t[1])
		if cashback < cost {
			totalLose += cost - cashback
			if cashback > maxCashbackLosing {
				maxCashbackLosing = cashback
			}
		} else {
			if cost > maxCostWinning {
				maxCostWinning = cost
			}
		}
	}
	return totalLose + max64(maxCashbackLosing, maxCostWinning)
}

func max64(a, b int64) int64 {
	if a > b {
		return a
	}
	return b
}
