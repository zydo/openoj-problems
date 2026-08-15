func countSubstrings(s string) int64 {
	var digits []int
	for i := 0; i < len(s); i++ {
		digits = append(digits, int(s[i]-'0'))
	}
	var total int64
	for d := 1; d < 10; d++ {
		cnt := make([]int64, d)
		for _, di := range digits {
			if di == d {
				for r := 0; r < d; r++ {
					if (r*10)%d == 0 {
						total += cnt[r]
					}
				}
				total += 1
			}
			newCnt := make([]int64, d)
			for r := 0; r < d; r++ {
				if cnt[r] != 0 {
					newCnt[(r*10+di)%d] += cnt[r]
				}
			}
			newCnt[di%d] += 1
			cnt = newCnt
		}
	}
	return total
}
