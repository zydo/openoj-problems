func largestVariance(s string) int {
	var present [26]bool
	for k := 0; k < len(s); k++ {
		present[s[k]-'a'] = true
	}
	answer := 0
	for high := 0; high < 26; high++ {
		if !present[high] {
			continue
		}
		for low := 0; low < 26; low++ {
			if !present[low] || high == low {
				continue
			}
			diff := 0        // max subarray sum ending here (may lack `low`)
			hasLow := false  // whether diffWithLow has been initialized
			diffWithLow := 0 // same but guaranteed to contain at least one `low`
			for k := 0; k < len(s); k++ {
				ch := s[k] - 'a'
				if int(ch) == high {
					diff++
					if hasLow {
						diffWithLow++
					}
				} else if int(ch) == low {
					diff--
					if hasLow {
						if diffWithLow-1 > diff {
							diffWithLow = diffWithLow - 1
						} else {
							diffWithLow = diff
						}
					} else {
						diffWithLow = diff
						hasLow = true
					}
					if diff < 0 {
						diff = 0
					}
				}
				// else: neither char, both values unchanged
				if hasLow && diffWithLow > answer {
					answer = diffWithLow
				}
			}
		}
	}
	return answer
}
