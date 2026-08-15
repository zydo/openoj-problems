func subarrayBitwiseORs(arr []int) int {
	seen := map[int]struct{}{}
	current := map[int]struct{}{}
	for _, x := range arr {
		nxt := make(map[int]struct{}, len(current)+1)
		for y := range current {
			nxt[x|y] = struct{}{}
		}
		nxt[x] = struct{}{}
		current = nxt
		for v := range current {
			seen[v] = struct{}{}
		}
	}
	return len(seen)
}
