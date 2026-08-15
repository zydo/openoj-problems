func numMatchingSubseq(s string, words []string) int {
	type entry struct {
		wi int // word index
		ni int // next index in word
	}
	var waiting [26][]entry
	count := 0
	for wi, w := range words {
		if len(w) == 0 {
			count++
		} else {
			waiting[w[0]-'a'] = append(waiting[w[0]-'a'], entry{wi, 1})
		}
	}
	for i := 0; i < len(s); i++ {
		c := s[i] - 'a'
		its := waiting[c]
		waiting[c] = nil
		for _, e := range its {
			w := words[e.wi]
			if e.ni == len(w) {
				count++
			} else {
				waiting[w[e.ni]-'a'] = append(waiting[w[e.ni]-'a'], entry{e.wi, e.ni + 1})
			}
		}
	}
	return count
}
