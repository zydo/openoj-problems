// One cached element standing in for "the future": the constructor advances
// the underlying cursor once and parks the element it lands on, so every call
// answers from the present — peek reads that parked element, next hands it
// over and refills it with one more cursor advance.
type LookaheadIterator struct {
	nums     []int
	cache    int
	index    int
	hasCache bool
}

func NewLookaheadIteratorTyped(nums []int) *LookaheadIterator {
	// The cursor sits one past the element held in the cache — this single
	// advance at construction is what makes peek possible.
	return &LookaheadIterator{nums: nums, cache: nums[0], index: 1, hasCache: true}
}

func (design *LookaheadIterator) next() int {
	// Hand over the cached element, then refill the cache with one more
	// cursor advance (to invalid once the sequence runs dry).
	value := design.cache
	design.hasCache = design.index < len(design.nums)
	if design.hasCache {
		design.cache = design.nums[design.index]
	}
	design.index++
	return value
}

func (design *LookaheadIterator) hasNext() bool {
	// The cache IS the hasNext answer: something is waiting exactly when
	// the parked element exists.
	return design.hasCache
}

func (design *LookaheadIterator) peek() int {
	// The whole design in one line — the future is already in hand, so
	// looking at it costs nothing and moves nothing.
	return design.cache
}
