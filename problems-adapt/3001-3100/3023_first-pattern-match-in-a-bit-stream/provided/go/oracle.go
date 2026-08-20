package main

// Problem-provided oracle (BitStream), Go side. Compiled beside every
// submission by the judge; never editable in the editor. Constructed
// from the case state: the recorded bit prefix as generic values, then
// the query budget.
type BitStream struct {
	bits     []int
	position int
	budget   int64
}

// NewBitStream builds the oracle from the case's construction values
// (the recorded prefix as one generic slice of bits) and the query
// budget.
func NewBitStream(construction []any, budget int64) *BitStream {
	items, ok := construction[0].([]any)
	if !ok {
		panic("BitStream bits must be an array")
	}
	bits := make([]int, 0, len(items))
	for _, item := range items {
		value, ok := item.(int64)
		if !ok {
			panic("BitStream bits must be integers")
		}
		bits = append(bits, int(value))
	}
	return &BitStream{bits: bits, budget: budget}
}

// Next returns the next bit of the recorded prefix, in order.
func (stream *BitStream) Next() int {
	if stream.budget <= 0 {
		panic("BitStream query budget exhausted")
	}
	stream.budget--
	value := stream.bits[stream.position]
	stream.position++
	return value
}
