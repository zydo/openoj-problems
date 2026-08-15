func countPalindromePaths(parent []int, s string) int64 {
	n := len(parent)
	children := make([][]int, n)
	for i := range children {
		children[i] = []int{}
	}
	for i := 1; i < n; i++ {
		children[parent[i]] = append(children[parent[i]], i)
	}

	masks := make([]int, n)
	order := make([]int, 0, n)
	order = append(order, 0)
	for qi := 0; qi < len(order); qi++ {
		v := order[qi]
		for _, c := range children[v] {
			masks[c] = masks[v] ^ (1 << (s[c] - 'a'))
			order = append(order, c)
		}
	}

	freq := make(map[int]int64)
	var ans int64
	for _, m := range masks {
		ans += freq[m]
		for b := 0; b < 26; b++ {
			ans += freq[m^(1<<b)]
		}
		freq[m]++
	}
	return ans
}
