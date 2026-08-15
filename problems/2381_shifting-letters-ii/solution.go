func shiftingLetters(s string, shifts [][]int) string {
	n := len(s)
	diff := make([]int, n+1)
	for _, sh := range shifts {
		delta := 1
		if sh[2] != 1 {
			delta = -1
		}
		diff[sh[0]] += delta
		diff[sh[1]+1] -= delta
	}
	chars := make([]byte, 0, n)
	shift := 0
	for i := 0; i < n; i++ {
		shift += diff[i]
		c := int(s[i]-'a') + shift
		chars = append(chars, byte('a'+((c%26+26)%26)))
	}
	return string(chars)
}
