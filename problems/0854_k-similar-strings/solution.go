func kSimilarity(s1 string, s2 string) int {
	type item struct {
		s     string
		steps int
	}
	queue := []item{{s1, 0}}
	seen := map[string]bool{s1: true}
	for head := 0; head < len(queue); head++ {
		cur := queue[head]
		s := cur.s
		if s == s2 {
			return cur.steps
		}
		b := []byte(s)
		i := 0
		for b[i] == s2[i] {
			i++
		}
		for j := i + 1; j < len(s); j++ {
			if s[j] == s2[i] && s[j] != s2[j] {
				b[i], b[j] = b[j], b[i]
				ns := string(b)
				b[i], b[j] = b[j], b[i]
				if !seen[ns] {
					seen[ns] = true
					queue = append(queue, item{ns, cur.steps + 1})
				}
			}
		}
	}
	return -1
}
