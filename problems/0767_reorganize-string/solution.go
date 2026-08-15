import "sort"

func reorganizeString(s string) string {
	n := len(s)
	var counts [26]int
	for i := 0; i < n; i++ {
		counts[s[i]-'a']++
	}
	type pair struct {
		ch  int
		cnt int
	}
	letters := make([]pair, 0, 26)
	for c := 0; c < 26; c++ {
		if counts[c] > 0 {
			letters = append(letters, pair{c, counts[c]})
		}
	}
	sort.Slice(letters, func(i, j int) bool {
		if letters[i].cnt != letters[j].cnt {
			return letters[i].cnt > letters[j].cnt
		}
		return letters[i].ch < letters[j].ch
	})
	if letters[0].cnt > (n+1)/2 {
		return ""
	}
	res := make([]byte, n)
	idx := 0
	for _, p := range letters {
		ch := byte('a' + p.ch)
		for k := 0; k < p.cnt; k++ {
			if idx >= n {
				idx = 1
			}
			res[idx] = ch
			idx += 2
		}
	}
	return string(res)
}
