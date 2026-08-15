type segTree struct {
	n    int
	tree []int64
	lazy []bool
}

func (st *segTree) build(node, lo, hi int, arr []int) {
	if lo == hi {
		st.tree[node] = int64(arr[lo])
		return
	}
	mid := (lo + hi) / 2
	st.build(node*2, lo, mid, arr)
	st.build(node*2+1, mid+1, hi, arr)
	st.tree[node] = st.tree[node*2] + st.tree[node*2+1]
}

func (st *segTree) apply(node, lo, hi int) {
	st.tree[node] = int64(hi-lo+1) - st.tree[node]
	st.lazy[node] = !st.lazy[node]
}

func (st *segTree) push(node, lo, hi int) {
	if st.lazy[node] {
		mid := (lo + hi) / 2
		st.apply(node*2, lo, mid)
		st.apply(node*2+1, mid+1, hi)
		st.lazy[node] = false
	}
}

func (st *segTree) flip(node, lo, hi, ql, qr int) {
	if ql > hi || qr < lo {
		return
	}
	if ql <= lo && hi <= qr {
		st.apply(node, lo, hi)
		return
	}
	st.push(node, lo, hi)
	mid := (lo + hi) / 2
	st.flip(node*2, lo, mid, ql, qr)
	st.flip(node*2+1, mid+1, hi, ql, qr)
	st.tree[node] = st.tree[node*2] + st.tree[node*2+1]
}

func handleQuery(nums1 []int, nums2 []int, queries [][]int) []int64 {
	n := len(nums1)
	st := &segTree{
		n:    n,
		tree: make([]int64, 4*n),
		lazy: make([]bool, 4*n),
	}
	if n > 0 {
		st.build(1, 0, n-1, nums1)
	}
	var total int64
	for _, x := range nums2 {
		total += int64(x)
	}
	answers := []int64{}
	for _, q := range queries {
		kind := q[0]
		if kind == 1 {
			st.flip(1, 0, n-1, q[1], q[2])
		} else if kind == 2 {
			total += int64(q[1]) * st.tree[1]
		} else {
			answers = append(answers, total)
		}
	}
	return answers
}
