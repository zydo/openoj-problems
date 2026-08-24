import (
	"fmt"
	"sort"
	"strings"
)

// Count each word in a hash map, then rank by descending frequency with the
// word as the lexicographic tiebreaker.
func wordFrequency(content string) []string {
	// Fields splits around runs of whitespace and never yields empty words.
	counts := map[string]int{}
	for _, word := range strings.Fields(content) {
		counts[word]++
	}
	type entry struct {
		word  string
		count int
	}
	ranked := make([]entry, 0, len(counts))
	for word, count := range counts {
		ranked = append(ranked, entry{word, count})
	}
	sort.Slice(ranked, func(i, j int) bool {
		if ranked[i].count != ranked[j].count {
			return ranked[i].count > ranked[j].count
		}
		return ranked[i].word < ranked[j].word
	})
	lines := make([]string, 0, len(ranked))
	for _, item := range ranked {
		lines = append(lines, fmt.Sprintf("%s %d", item.word, item.count))
	}
	return lines
}
