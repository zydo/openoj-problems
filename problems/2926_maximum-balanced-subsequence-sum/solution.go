import "sort"

func maxBalancedSubsequenceSum(nums []int) int64 {
	n := len(nums)
	vals := make([]int64, n)
	for i := 0; i < n; i++ {
		vals[i] = int64(nums[i]) - int64(i)
	}
	comp := make([]int64, n)
	copy(comp, vals)
	sort.Slice(comp, func(a, b int) bool { return comp[a] < comp[b] })
	m := 0
	for i := 0; i < n; i++ {
		if i == 0 || comp[i] != comp[i-1] {
			comp[m] = comp[i]
			m++
		}
	}
	comp = comp[:m]

	bit := make([]int64, m+1)

	var ans int64
	ans = -(1 << 62)
	for i := 0; i < n; i++ {
		j := sort.Search(len(comp), func(a int) bool { return comp[a] >= vals[i] }) + 1
		best := query2926(bit, j)
		var dp int64
		if best <= 0 {
			dp = int64(nums[i])
		} else {
			dp = int64(nums[i]) + best
		}
		if dp > ans {
			ans = dp
		}
		update2926(bit, j, dp)
	}
	return ans
}

func update2926(bit []int64, i int, value int64) {
	m := len(bit) - 1
	for i <= m {
		if value > bit[i] {
			bit[i] = value
		}
		i += i & (-i)
	}
}

func query2926(bit []int64, i int) int64 {
	var best int64
	for i > 0 {
		if bit[i] > best {
			best = bit[i]
		}
		i -= i & (-i)
	}
	return best
}
