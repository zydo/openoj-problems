func maxProfit(prices []int, fee int) int64 {
	cash, hold := int64(0), -(int64(1) << 60)
	for _, price := range prices {
		newCash := cash
		if v := hold + int64(price) - int64(fee); v > newCash {
			newCash = v
		}
		newHold := hold
		if v := cash - int64(price); v > newHold {
			newHold = v
		}
		cash, hold = newCash, newHold
	}
	return cash
}
