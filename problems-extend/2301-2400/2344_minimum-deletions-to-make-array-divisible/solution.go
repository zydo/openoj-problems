import (
	"sort"
)

func minOperations(nums []int, numsDivide []int) int {
	g := 0
	for _, value := range numsDivide {
		for value != 0 {
			g, value = value, g%value
		}
	}
	sort.Ints(nums)
	for index, value := range nums {
		if g%value == 0 {
			return index
		}
	}
	return -1
}
