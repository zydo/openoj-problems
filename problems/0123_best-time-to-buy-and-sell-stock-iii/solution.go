func maxProfit(prices []int) int {
	buy1, buy2, sell1, sell2 := -1000000000, -1000000000, 0, 0
	for _, price := range prices {
		if -price > buy1 {
			buy1 = -price
		}
		if buy1+price > sell1 {
			sell1 = buy1 + price
		}
		if sell1-price > buy2 {
			buy2 = sell1 - price
		}
		if buy2+price > sell2 {
			sell2 = buy2 + price
		}
	}
	return sell2
}
