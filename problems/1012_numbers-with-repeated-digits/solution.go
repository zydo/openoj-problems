func numDupDigitsAtMostN(n int) int {
	digits := []int{}
	for t := n; t > 0; t /= 10 {
		digits = append(digits, t%10)
	}
	for i, j := 0, len(digits)-1; i < j; i, j = i+1, j-1 {
		digits[i], digits[j] = digits[j], digits[i]
	}
	length := len(digits)

	distinct := 0
	for d := 1; d < length; d++ {
		prod := 9
		for i := 1; i < d; i++ {
			prod *= 10 - i
		}
		distinct += prod
	}

	usedMask := 0
	repeated := false
	for i := 0; i < length; i++ {
		digit := digits[i]
		start := 0
		if i == 0 {
			start = 1
		}
		smaller := 0
		for cand := start; cand < digit; cand++ {
			if usedMask&(1<<cand) == 0 {
				smaller++
			}
		}
		remaining := length - i - 1
		perms := 1
		avail := 10 - (i + 1)
		for r := 0; r < remaining; r++ {
			perms *= avail
			avail--
		}
		distinct += smaller * perms
		if usedMask&(1<<digit) != 0 {
			repeated = true
			break
		}
		usedMask |= 1 << digit
	}
	if !repeated {
		distinct++
	}

	return n - distinct
}
