package main

// Problem-provided oracle (RestlessNumber), Go side. Compiled beside every
// submission by the judge; never editable in the editor. Constructed
// from the case state: the initial hidden number as a generic value,
// then the query budget.
type RestlessNumber struct {
	n      int
	budget int64
}

// NewRestlessNumber builds the oracle from the case's construction value
// (the initial hidden number) and the query budget.
func NewRestlessNumber(construction []any, budget int64) *RestlessNumber {
	n, ok := construction[0].(int64)
	if !ok {
		panic("RestlessNumber n must be an integer")
	}
	return &RestlessNumber{n: int(n), budget: budget}
}

// CommonBits reports how many of the low 30 bits of the current number
// agree with num, then flips those bits (n ^= num).
func (restlessNumber *RestlessNumber) CommonBits(num int) int {
	if restlessNumber.budget <= 0 {
		panic("RestlessNumber query budget exhausted")
	}
	restlessNumber.budget--
	diff := (restlessNumber.n ^ num) & ((1 << 30) - 1)
	restlessNumber.n ^= num
	return 30 - bitsOnes(diff)
}

func bitsOnes(value int) int {
	count := 0
	for value != 0 {
		count += value & 1
		value >>= 1
	}
	return count
}
