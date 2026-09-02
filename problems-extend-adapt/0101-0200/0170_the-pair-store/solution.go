// Hash multiset: value -> occurrence count. add bumps a counter in O(1);
// find lazily scans the distinct values once, asking for each complement.
type PairStore struct {
	counts map[int]int
}

func NewPairStoreTyped() *PairStore {
	return &PairStore{counts: make(map[int]int)}
}

func (design *PairStore) add(number int) {
	design.counts[number]++
}

func (design *PairStore) find(value int) bool {
	for number, count := range design.counts {
		complement := value - number
		_, ok := design.counts[complement]
		// A value that is its own complement needs two stored copies.
		if ok && (complement != number || count > 1) {
			return true
		}
	}
	return false
}
