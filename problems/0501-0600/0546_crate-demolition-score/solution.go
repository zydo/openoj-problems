// Memoized interval DP. dfs(l, r, k) is the best score from crates[l..r]
// when k crates of crates[l]'s color, already removed from outside the
// interval, sit glued to its left and will join its group.
func demolishCrates(crates []int) int {
	n := len(crates)
	memo := make([][][]int, n)
	for l := range memo {
		memo[l] = make([][]int, n)
		for r := range memo[l] {
			memo[l][r] = make([]int, n+1)
			for k := range memo[l][r] {
				memo[l][r][k] = -1
			}
		}
	}

	var dfs func(l, r, k int) int
	dfs = func(l, r, k int) int {
		if l > r {
			return 0
		}
		// Adjacent same-colored crates never need separate treatment:
		// holding crates[l] until its identical neighbor leaves only grows
		// the eventual group, so the run joins the carry.
		for l < r && crates[l+1] == crates[l] {
			l++
			k++
		}
		if memo[l][r][k] != -1 {
			return memo[l][r][k]
		}
		// Either take crates[l] and its carry now, scoring (k+1)^2...
		best := (k+1)*(k+1) + dfs(l+1, r, 0)
		// ...or hold it: clear crates[l+1..m-1] first, so crates[l] meets
		// the next same-colored crate one richer in the carry.
		for m := l + 1; m <= r; m++ {
			if crates[m] == crates[l] {
				best = max(best, dfs(l+1, m-1, 0)+dfs(m, r, k+1))
			}
		}
		memo[l][r][k] = best
		return best
	}

	return dfs(0, n-1, 0)
}
