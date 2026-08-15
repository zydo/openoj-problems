func sumSubarrayMins(arr []int) int {
	const MOD = 1000000007
	n := len(arr)
	left := make([]int, n)
	right := make([]int, n)
	stack := []int{}
	for i := 0; i < n; i++ {
		for len(stack) > 0 && arr[stack[len(stack)-1]] >= arr[i] {
			stack = stack[:len(stack)-1]
		}
		if len(stack) > 0 {
			left[i] = stack[len(stack)-1]
		} else {
			left[i] = -1
		}
		stack = append(stack, i)
	}
	stack = []int{}
	for i := n - 1; i >= 0; i-- {
		for len(stack) > 0 && arr[stack[len(stack)-1]] > arr[i] {
			stack = stack[:len(stack)-1]
		}
		if len(stack) > 0 {
			right[i] = stack[len(stack)-1]
		} else {
			right[i] = n
		}
		stack = append(stack, i)
	}
	total := int64(0)
	for i := 0; i < n; i++ {
		total += int64(arr[i]) * int64(i-left[i]) * int64(right[i]-i)
	}
	return int(total % MOD)
}
