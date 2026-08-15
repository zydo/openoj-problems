func appealSum(s string) int64 {
	last := make([]int, 26)
	for i := range last {
		last[i] = -1
	}
	var total, current int64
	for i := 0; i < len(s); i++ {
		c := int(s[i] - 'a')
		current += int64(i - last[c])
		last[c] = i
		total += current
	}
	return total
}
