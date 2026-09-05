package main

// Problem-provided oracle (BalanceReader), Go side. Compiled beside every
// submission by the judge; never editable in the editor. Constructed
// from the case state: the hidden array as generic values, then the
// query budget.
type BalanceReader struct {
	values []int64
	budget int64
}

// NewBalanceReader builds the oracle from the case's construction values
// (the array as one generic slice) and the query budget.
func NewBalanceReader(construction []any, budget int64) *BalanceReader {
	raw, ok := construction[0].([]any)
	if !ok {
		panic("BalanceReader arr must be an array")
	}
	values := make([]int64, 0, len(raw))
	for _, entry := range raw {
		value, ok := entry.(int64)
		if !ok {
			panic("BalanceReader entries must be integers")
		}
		values = append(values, value)
	}
	return &BalanceReader{values: values, budget: budget}
}

// CompareSub compares the sum of values[l..r] with the sum of
// values[x..y]: 1 if the first is larger, -1 if smaller, 0 if equal.
func (balanceReader *BalanceReader) CompareSub(l int, r int, x int, y int) int {
	if balanceReader.budget <= 0 {
		panic("BalanceReader query budget exhausted")
	}
	balanceReader.budget--
	var left int64
	for i := l; i <= r; i++ {
		left += balanceReader.values[i]
	}
	var right int64
	for i := x; i <= y; i++ {
		right += balanceReader.values[i]
	}
	if left > right {
		return 1
	}
	if left < right {
		return -1
	}
	return 0
}

// Length returns the size of the array.
func (balanceReader *BalanceReader) Length() int {
	return len(balanceReader.values)
}
