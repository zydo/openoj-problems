func findTheLongestSubstring(s string) int {
	bit := make([]int, 26)
	bit['a'-'a'] = 1
	bit['e'-'a'] = 2
	bit['i'-'a'] = 4
	bit['o'-'a'] = 8
	bit['u'-'a'] = 16
	first := make([]int, 32)
	for i := range first {
		first[i] = -2
	}
	first[0] = -1
	mask := 0
	best := 0
	for i := 0; i < len(s); i++ {
		mask ^= bit[s[i]-'a']
		if first[mask] != -2 {
			if i-first[mask] > best {
				best = i - first[mask]
			}
		} else {
			first[mask] = i
		}
	}
	return best
}
