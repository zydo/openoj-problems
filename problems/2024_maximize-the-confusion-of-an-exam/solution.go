func maxConsecutiveAnswers(answerKey string, k int) int {
	t, f := 0, 0
	left := 0
	best := 0
	n := len(answerKey)
	for right := 0; right < n; right++ {
		if answerKey[right] == 'T' {
			t++
		} else {
			f++
		}
		for {
			m := t
			if f < m {
				m = f
			}
			if m <= k {
				break
			}
			if answerKey[left] == 'T' {
				t--
			} else {
				f--
			}
			left++
		}
		if w := right - left + 1; w > best {
			best = w
		}
	}
	return best
}
