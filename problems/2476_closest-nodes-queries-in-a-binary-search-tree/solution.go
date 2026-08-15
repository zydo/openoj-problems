import "sort"

func closestNodes(root *TreeNode, queries []int) [][]int {
	values := []int{}
	var stack []*TreeNode
	current := root
	for current != nil || len(stack) > 0 {
		for current != nil {
			stack = append(stack, current)
			current = current.Left
		}
		current = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		values = append(values, current.Val)
		current = current.Right
	}

	bisectLeft := func(target int) int {
		return sort.Search(len(values), func(i int) bool { return values[i] >= target })
	}

	answer := make([][]int, 0, len(queries))
	for _, query := range queries {
		lower := bisectLeft(query)
		upper := bisectLeft(query + 1)
		minimum, maximum := -1, -1
		if upper > 0 {
			minimum = values[upper-1]
		}
		if lower < len(values) {
			maximum = values[lower]
		}
		answer = append(answer, []int{minimum, maximum})
	}
	return answer
}
