func allPathsReachTarget(n int, edges [][]int, source int, target int) bool {
	graph := make([][]int, n)
	for _, edge := range edges {
		graph[edge[0]] = append(graph[edge[0]], edge[1])
	}

	// 0 = unvisited (white), 1 = on the current DFS path (gray), 2 = fully
	// verified safe (black). A node is a leaf when it has no outgoing edges;
	// a leaf is safe only if it is the target. The target itself
	// must also be a true leaf -- if it has outgoing edges, any path
	// through it keeps going and can only end somewhere else (or loop
	// forever), so it is unsafe the moment it is reached.
	const white, gray, black = 0, 1, 2
	state := make([]int, n)

	// leafVerdict returns a decided verdict (true/false) for a leaf or for
	// the target itself; ok is false when the node needs a full DFS
	// expansion before it is decided.
	leafVerdict := func(node int) (verdict bool, ok bool) {
		if len(graph[node]) == 0 {
			return node == target, true
		}
		if node == target {
			return false, true
		}
		return false, false
	}

	if verdict, ok := leafVerdict(source); ok {
		return verdict
	}

	// Explicit stack of (node, next child index) frames -- an iterative
	// post-order DFS so the recursion depth never depends on graph depth.
	type frame struct {
		node int
		idx  int
	}
	state[source] = gray
	stack := []frame{{source, 0}}
	for len(stack) > 0 {
		top := &stack[len(stack)-1]
		if top.idx == len(graph[top.node]) {
			state[top.node] = black
			stack = stack[:len(stack)-1]
			continue
		}
		neighbor := graph[top.node][top.idx]
		top.idx++
		if state[neighbor] == gray {
			return false // back edge to a node on the current path: a cycle
		}
		if state[neighbor] == black {
			continue // already proven safe on an earlier branch
		}
		verdict, ok := leafVerdict(neighbor)
		if ok {
			if !verdict {
				return false
			}
			state[neighbor] = black
			continue
		}
		state[neighbor] = gray
		stack = append(stack, frame{neighbor, 0})
	}
	return true
}
