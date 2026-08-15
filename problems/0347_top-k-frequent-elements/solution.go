import "sort"

func topKFrequent(nums []int, k int) []int {
	counts := make(map[int]int)
	for _, x := range nums {
		counts[x]++
	}
	items := make([][2]int, 0, len(counts))
	for v, c := range counts {
		items = append(items, [2]int{v, c})
	}
	sort.Slice(items, func(i, j int) bool {
		if items[i][1] != items[j][1] {
			return items[i][1] > items[j][1]
		}
		return items[i][0] < items[j][0]
	})
	result := make([]int, 0, k)
	for i := 0; i < k && i < len(items); i++ {
		result = append(result, items[i][0])
	}
	return result
}
