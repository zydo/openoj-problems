func minHeightShelves(books [][]int, shelfWidth int) int {
	count := len(books)
	dp := make([]int, count+1)
	for i := 1; i <= count; i++ {
		width := 0
		height := 0
		dp[i] = 1 << 40
		for j := i - 1; j >= 0; j-- {
			thickness, bookHeight := books[j][0], books[j][1]
			width += thickness
			if width > shelfWidth {
				break
			}
			if bookHeight > height {
				height = bookHeight
			}
			if dp[j]+height < dp[i] {
				dp[i] = dp[j] + height
			}
		}
	}
	return dp[count]
}
