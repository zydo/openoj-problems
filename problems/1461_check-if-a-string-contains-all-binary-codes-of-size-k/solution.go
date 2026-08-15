func hasAllCodes(s string, k int) bool {
	need := 1 << k
	if len(s) < k {
		return false
	}
	seen := make(map[string]bool)
	for i := 0; i+k <= len(s); i++ {
		seen[s[i:i+k]] = true
		if len(seen) == need {
			return true
		}
	}
	return len(seen) == need
}
