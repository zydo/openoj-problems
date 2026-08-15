import "sort"

func gcdSort(nums []int) bool {
	const MX = 100001
	spf := make([]int, MX)
	for i := 0; i < MX; i++ {
		spf[i] = i
	}
	for i := 2; i*i < MX; i++ {
		if spf[i] == i {
			for j := i * i; j < MX; j += i {
				if spf[j] == j {
					spf[j] = i
				}
			}
		}
	}

	parent := make([]int, MX)
	for i := 0; i < MX; i++ {
		parent[i] = i
	}

	var find func(a int) int
	find = func(a int) int {
		for parent[a] != a {
			parent[a] = parent[parent[a]]
			a = parent[a]
		}
		return a
	}
	union := func(a, b int) {
		ra, rb := find(a), find(b)
		if ra != rb {
			parent[ra] = rb
		}
	}

	for _, x := range nums {
		v := x
		for v > 1 {
			p := spf[v]
			union(x, p)
			for v%p == 0 {
				v /= p
			}
		}
	}

	target := make([]int, len(nums))
	copy(target, nums)
	sort.Ints(target)
	for i := range nums {
		if find(nums[i]) != find(target[i]) {
			return false
		}
	}
	return true
}
