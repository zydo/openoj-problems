func minimumFlips(root *TreeNode, result bool) int {
	if root == nil {
		return 0
	}
	order := []*TreeNode{root}
	for head := 0; head < len(order); head++ {
		node := order[head]
		if node.Left != nil {
			order = append(order, node.Left)
		}
		if node.Right != nil {
			order = append(order, node.Right)
		}
	}
	n := len(order)
	idx := make(map[*TreeNode]int, n)
	for i, node := range order {
		idx[node] = i
	}
	t := make([]int, n)
	f := make([]int, n)
	for i := n - 1; i >= 0; i-- {
		node := order[i]
		v := node.Val
		if node.Left == nil && node.Right == nil {
			if v == 1 {
				t[i], f[i] = 0, 1
			} else {
				t[i], f[i] = 1, 0
			}
		} else if v == 5 {
			child := node.Left
			if child == nil {
				child = node.Right
			}
			ci := idx[child]
			t[i], f[i] = f[ci], t[ci]
		} else {
			li := idx[node.Left]
			ri := idx[node.Right]
			lt, lf := t[li], f[li]
			rt, rf := t[ri], f[ri]
			if v == 2 {
				t[i], f[i] = min(lt, rt), lf+rf
			} else if v == 3 {
				t[i], f[i] = lt+rt, min(lf, rf)
			} else {
				t[i], f[i] = min(lt+rf, lf+rt), min(lt+rt, lf+rf)
			}
		}
	}
	rootIdx := idx[root]
	if result {
		return t[rootIdx]
	}
	return f[rootIdx]
}
