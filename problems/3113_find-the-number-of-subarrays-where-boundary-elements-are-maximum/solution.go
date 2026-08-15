import "sort"

func numberOfSubarrays(nums []int) int64 {
	n := len(nums)
	leftGreater := make([]int, n)
	stack := make([]int, 0, n)
	for i, x := range nums {
		for len(stack) > 0 && nums[stack[len(stack)-1]] <= x {
			stack = stack[:len(stack)-1]
		}
		if len(stack) > 0 {
			leftGreater[i] = stack[len(stack)-1]
		} else {
			leftGreater[i] = -1
		}
		stack = append(stack, i)
	}

	positions := make(map[int][]int)
	var ans int64
	for i, x := range nums {
		lst := positions[x]
		if lst == nil {
			lst = []int{}
			positions[x] = lst
		}
		lo := sort.SearchInts(lst, leftGreater[i]+1)
		count := int64(1 + len(lst) - lo)
		ans += count
		positions[x] = append(lst, i)
	}
	return ans
}
