import "math/bits"

func maxLength(arr []string) int {
	n := len(arr)
	masks := make([]int, n)
	for i, s := range arr {
		mask := 0
		bad := false
		for _, ch := range []byte(s) {
			bit := 1 << (ch - 'a')
			if mask&bit != 0 {
				bad = true
				break
			}
			mask |= bit
		}
		if bad {
			masks[i] = -1
		} else {
			masks[i] = mask
		}
	}

	best := 0
	var dfs func(index, used int)
	dfs = func(index, used int) {
		total := bits.OnesCount(uint(used))
		if total > best {
			best = total
		}
		for j := index; j < n; j++ {
			if masks[j] != -1 && used&masks[j] == 0 {
				dfs(j+1, used|masks[j])
			}
		}
	}
	dfs(0, 0)
	return best
}
