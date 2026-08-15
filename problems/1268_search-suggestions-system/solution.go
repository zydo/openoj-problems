import (
	"sort"
	"strings"
)

func suggestedProducts(products []string, searchWord string) [][]string {
	sorted := append([]string(nil), products...)
	sort.Strings(sorted)
	result := [][]string{}
	prefix := ""
	for _, ch := range searchWord {
		prefix += string(ch)
		i := sort.SearchStrings(sorted, prefix)
		suggestions := []string{}
		for j := i; j < len(sorted) && len(suggestions) < 3; j++ {
			if strings.HasPrefix(sorted[j], prefix) {
				suggestions = append(suggestions, sorted[j])
			} else {
				break
			}
		}
		result = append(result, suggestions)
	}
	return result
}
