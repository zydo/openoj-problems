import "sort"

func groupAnagrams(strs []string) [][]string {
	index := make(map[string]int)
	groups := [][]string{}
	for _, word := range strs {
		keyBytes := []byte(word)
		sort.Slice(keyBytes, func(i, j int) bool { return keyBytes[i] < keyBytes[j] })
		key := string(keyBytes)
		if idx, ok := index[key]; ok {
			groups[idx] = append(groups[idx], word)
		} else {
			index[key] = len(groups)
			groups = append(groups, []string{word})
		}
	}
	return groups
}
