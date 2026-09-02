import "sort"

type RangeTally struct {
	positions map[int][]int
}

func NewRangeTallyTyped(arr []int) *RangeTally {
	positions := make(map[int][]int)
	for index, value := range arr {
		positions[value] = append(positions[value], index)
	}
	return &RangeTally{positions: positions}
}

func (design *RangeTally) query(left int, right int, value int) int {
	indices := design.positions[value]
	return sort.SearchInts(indices, right+1) - sort.SearchInts(indices, left)
}
