func wonderfulSubstrings(word string) int64 {
	var count [1024]int64
	count[0] = 1
	mask := 0
	var total int64
	for i := 0; i < len(word); i++ {
		mask ^= 1 << (word[i] - 'a')
		total += count[mask]
		for b := 0; b < 10; b++ {
			total += count[mask^(1<<b)]
		}
		count[mask]++
	}
	return total
}
