func smallestEquivalentString(s1 string, s2 string, baseStr string) string {
	parent := make([]int, 26)
	for i := range parent {
		parent[i] = i
	}
	var find func(int) int
	find = func(a int) int {
		for parent[a] != a {
			parent[a] = parent[parent[a]]
			a = parent[a]
		}
		return a
	}
	for i := 0; i < len(s1); i++ {
		ra, rb := find(int(s1[i]-'a')), find(int(s2[i]-'a'))
		if ra != rb {
			if rb < ra {
				ra, rb = rb, ra
			}
			parent[rb] = ra
		}
	}
	out := make([]byte, 0, len(baseStr))
	for i := 0; i < len(baseStr); i++ {
		out = append(out, byte('a'+find(int(baseStr[i]-'a'))))
	}
	return string(out)
}
