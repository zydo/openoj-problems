package main

// Problem-provided oracle (MaskedNumber), Go side. Compiled beside every
// submission by the judge; never editable in the editor. Constructed
// from the case state: the hidden number as a generic value, then the
// query budget.
type MaskedNumber struct {
	n      int64
	budget int64
}

// NewMaskedNumber builds the oracle from the case's construction value
// (the hidden number) and the query budget.
func NewMaskedNumber(construction []any, budget int64) *MaskedNumber {
	n, ok := construction[0].(int64)
	if !ok {
		panic("MaskedNumber n must be an integer")
	}
	return &MaskedNumber{n: n, budget: budget}
}

// CommonSetBits reports how many bits num shares with the hidden n —
// the popcount of their bitwise AND.
func (maskedNumber *MaskedNumber) CommonSetBits(num int) int {
	if maskedNumber.budget <= 0 {
		panic("MaskedNumber query budget exhausted")
	}
	maskedNumber.budget--
	count := 0
	for shared := uint64(int64(num)) & uint64(maskedNumber.n); shared != 0; shared >>= 1 {
		count += int(shared & 1)
	}
	return count
}
