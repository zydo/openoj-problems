func canArrange(arr []int, k int) bool {
	freq := make([]int, k)
	for _, x := range arr {
		r := x % k
		if r < 0 {
			r += k
		}
		freq[r]++
	}
	if freq[0]%2 != 0 {
		return false
	}
	for i := 1; i <= k/2; i++ {
		if freq[i] != freq[k-i] {
			return false
		}
	}
	return true
}
