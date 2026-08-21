package main

type BottomBoostStack struct {
	values  []int64
	pending []int64
	maxSize int
}

func NewBottomBoostStackTyped(maxSize int) *BottomBoostStack {
	return &BottomBoostStack{maxSize: maxSize}
}

func (design *BottomBoostStack) push(x int) {
	if len(design.values) < design.maxSize {
		design.values = append(design.values, int64(x))
		design.pending = append(design.pending, 0)
	}
}

func (design *BottomBoostStack) pop() int {
	if len(design.values) == 0 {
		return -1
	}
	increment := design.pending[len(design.pending)-1]
	design.pending = design.pending[:len(design.pending)-1]
	if len(design.pending) > 0 {
		design.pending[len(design.pending)-1] += increment
	}
	value := design.values[len(design.values)-1] + increment
	design.values = design.values[:len(design.values)-1]
	return int(value)
}

func (design *BottomBoostStack) boost(k int, val int) {
	limit := min(k, len(design.values))
	if limit > 0 {
		design.pending[limit-1] += int64(val)
	}
}
