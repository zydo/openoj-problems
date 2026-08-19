func minimumStartingCash(deals [][]int) int64 {
	totalDrain := int64(0)
	maxRebateLosing := int64(0)
	maxPriceWinning := int64(0)
	for _, t := range deals {
		price := int64(t[0])
		rebate := int64(t[1])
		// losing deals (rebate < price) drain money permanently; profitable deals don't
		if rebate < price {
			// losing deals' total drain is fixed regardless of ordering
			totalDrain += price - rebate
			// worst order: largest-rebate losing deal goes last, after every
			// other drain, yet its full price must still be covered
			if rebate > maxRebateLosing {
				maxRebateLosing = rebate
			}
		} else {
			// profitable deals only matter via their largest upfront price, paid at
			// the lowest-funds point (right after the losing block)
			if price > maxPriceWinning {
				maxPriceWinning = price
			}
		}
	}
	// answer = totalDrain + max(last losing deal's rebate, top profitable deal's price)
	return totalDrain + max64(maxRebateLosing, maxPriceWinning)
}

func max64(a, b int64) int64 {
	if a > b {
		return a
	}
	return b
}
