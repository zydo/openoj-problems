import (
	"sort"
	"strconv"
	"strings"
)

func largestNumber(nums []int) string {
	strs := make([]string, len(nums))
	for i, n := range nums {
		strs[i] = strconv.Itoa(n)
	}
	sort.Slice(strs, func(a, b int) bool {
		return strs[a]+strs[b] > strs[b]+strs[a]
	})
	result := strings.Join(strs, "")
	if result[0] == '0' {
		return "0"
	}
	return result
}
