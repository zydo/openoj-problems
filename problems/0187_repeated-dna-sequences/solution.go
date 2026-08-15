import "sort"

func findRepeatedDnaSequences(s string) []string {
	seen := make(map[string]bool)
	repeated := make(map[string]bool)
	for i := 0; i+10 <= len(s); i++ {
		seq := s[i : i+10]
		if seen[seq] {
			repeated[seq] = true
		} else {
			seen[seq] = true
		}
	}
	result := make([]string, 0, len(repeated))
	for seq := range repeated {
		result = append(result, seq)
	}
	sort.Strings(result)
	return result
}
