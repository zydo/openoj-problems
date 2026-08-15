func distinctEchoSubstrings(text string) int {
	n := len(text)
	seen := map[string]bool{}
	for half := 1; half <= n/2; half++ {
		for i := 0; i+2*half <= n; i++ {
			if text[i:i+half] == text[i+half:i+2*half] {
				seen[text[i:i+2*half]] = true
			}
		}
	}
	return len(seen)
}
