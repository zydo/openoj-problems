import "sort"

func isPossibleDivide(nums []int, k int) bool {
	if len(nums)%k != 0 {
		return false
	}
	counts := make(map[int]int)
	for _, x := range nums {
		counts[x]++
	}
	values := make([]int, 0, len(counts))
	for v := range counts {
		values = append(values, v)
	}
	sort.Ints(values)
	for _, value := range values {
		need := counts[value]
		if need <= 0 {
			continue
		}
		for i := value; i < value+k; i++ {
			if counts[i] < need {
				return false
			}
			counts[i] -= need
		}
	}
	return true
}
