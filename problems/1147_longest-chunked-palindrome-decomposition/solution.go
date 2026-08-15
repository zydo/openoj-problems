func longestDecomposition(text string) int {
	n := len(text)
	count := 0
	left := 0
	right := n
	for left < right {
		size := 1
		matched := false
		for left+size <= right-size {
			if text[left:left+size] == text[right-size:right] {
				count += 2
				left += size
				right -= size
				matched = true
				break
			}
			size++
		}
		if !matched {
			count++
			break
		}
	}
	return count
}
