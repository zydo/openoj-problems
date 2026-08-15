import "sort"

func successfulPairs(spells []int, potions []int, success int64) []int {
	sort.Ints(potions)
	m := len(potions)
	res := make([]int, len(spells))
	for i, sp := range spells {
		need := (success + int64(sp) - 1) / int64(sp)
		// first index with potions[idx] >= need
		idx := sort.Search(m, func(j int) bool { return int64(potions[j]) >= need })
		res[i] = m - idx
	}
	return res
}
