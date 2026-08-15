func maxProfit(prices []int) int {
	hold, sold, rest := -1000000000, 0, 0
	for _, price := range prices {
		prevSold := sold
		if rest-price > hold {
			hold = rest - price
		}
		sold = hold + price
		if prevSold > rest {
			rest = prevSold
		}
	}
	if sold > rest {
		return sold
	}
	return rest
}
