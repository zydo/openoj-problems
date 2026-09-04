func containsAnagram(pattern string, text string) bool {
	m, n := len(pattern), len(text)
	// No window of length m can exist inside a shorter text.
	if m > n {
		return false
	}
	var need, window [26]int
	for i := 0; i < m; i++ {
		need[pattern[i]-'a']++
		window[text[i]-'a']++
	}
	// Matching frequency vectors means the window is a permutation of pattern.
	if need == window {
		return true
	}
	for i := m; i < n; i++ {
		// Slide one position: add the entering char, drop the leaving one.
		window[text[i]-'a']++
		window[text[i-m]-'a']--
		if need == window {
			return true
		}
	}
	return false
}
