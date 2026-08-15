func candy(ratings []int) int {
	n := len(ratings)
	candies := make([]int, n)
	for i := range candies {
		candies[i] = 1
	}
	for i := 1; i < n; i++ {
		if ratings[i] > ratings[i-1] {
			candies[i] = candies[i-1] + 1
		}
	}
	for i := n - 2; i >= 0; i-- {
		if ratings[i] > ratings[i+1] {
			if candies[i+1]+1 > candies[i] {
				candies[i] = candies[i+1] + 1
			}
		}
	}
	total := int64(0)
	for _, value := range candies {
		total += int64(value)
	}
	return int(total)
}
