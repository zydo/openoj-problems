import "strings"

func countPalindromicSubsequence(s string) int {
	count := 0
	for c := byte('a'); c <= 'z'; c++ {
		first := strings.IndexByte(s, c)
		if first == -1 {
			continue
		}
		last := strings.LastIndexByte(s, c)
		if last-first >= 2 {
			var seen [26]bool
			for i := first + 1; i < last; i++ {
				seen[s[i]-'a'] = true
			}
			for _, b := range seen {
				if b {
					count++
				}
			}
		}
	}
	return count
}
