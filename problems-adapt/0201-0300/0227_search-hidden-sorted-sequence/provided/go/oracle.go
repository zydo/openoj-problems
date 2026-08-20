package main

// Problem-provided oracle (SequenceReader), Go side. Compiled beside
// every submission by the judge; never editable in the editor.
// Constructed from the case state: the hidden values as generic values,
// then the query budget.
type SequenceReader struct {
	values []int
	budget int64
}

// NewSequenceReader builds the oracle from the case's construction
// values (one generic slice of ints) and the query budget.
func NewSequenceReader(construction []any, budget int64) *SequenceReader {
	items, ok := construction[0].([]any)
	if !ok {
		panic("SequenceReader values must be an array")
	}
	values := make([]int, 0, len(items))
	for _, item := range items {
		value, ok := item.(int64)
		if !ok {
			panic("SequenceReader values must be integers")
		}
		values = append(values, int(value))
	}
	return &SequenceReader{values: values, budget: budget}
}

// Get returns the value at index, or the out-of-range sentinel 2^31-1.
func (reader *SequenceReader) Get(index int) int {
	if reader.budget <= 0 {
		panic("SequenceReader query budget exhausted")
	}
	reader.budget--
	if index >= 0 && index < len(reader.values) {
		return reader.values[index]
	}
	return 2147483647
}
