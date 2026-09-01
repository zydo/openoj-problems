package main

import "fmt"

// Problem-provided oracle (SealedListNode), Go side. Compiled beside
// every submission by the judge; never editable in the editor.
// Constructed from the case state: the serialized linked list as a
// generic value, then the query budget. The chain is wired at
// construction and the returned object IS the sealedListNode handed to the
// solution.
type SealedListNode struct {
	value      int64
	next       *SealedListNode
	transcript *[]int64
	budget     int64
}

// NewSealedListNode builds the oracle from the case's construction
// value (the comma-separated node values) and the query budget.
func NewSealedListNode(construction []any, budget int64) *SealedListNode {
	raw, ok := construction[0].(string)
	if !ok {
		panic("SealedListNode sealedListNode must be a string")
	}
	values := make([]int64, 0)
	for _, part := range splitCommas(raw) {
		v, err := strconvParseInt(part)
		if err != nil {
			panic("SealedListNode sealedListNode must contain integers")
		}
		values = append(values, v)
	}
	printed := make([]int64, 0)
	sealedListNode := &SealedListNode{transcript: &printed, budget: budget}
	// Wire the chain from the tail inward; sealedListNode keeps zero value when the
	// list is empty and its next stays nil.
	tail := (*SealedListNode)(nil)
	for i := len(values) - 1; i >= 1; i-- {
		node := &SealedListNode{value: values[i], transcript: &printed,
			budget: int64(^uint64(0) >> 1)}
		node.next = tail
		tail = node
	}
	if len(values) > 0 {
		sealedListNode.value = values[0]
		sealedListNode.next = tail
	}
	return sealedListNode
}

func splitCommas(s string) []string {
	parts := make([]string, 0)
	start := 0
	for i := 0; i < len(s); i++ {
		if s[i] == ',' {
			parts = append(parts, s[start:i])
			start = i + 1
		}
	}
	if start < len(s) || len(parts) > 0 {
		parts = append(parts, s[start:])
	}
	return parts
}

func strconvParseInt(s string) (int64, error) {
	var v int64
	_, err := fmt.Sscanf(s, "%d", &v)
	return v, err
}

// PrintValue records the current node's value into the judged transcript.
func (node *SealedListNode) PrintValue() {
	if node.budget <= 0 {
		panic("SealedListNode query budget exhausted")
	}
	node.budget--
	*node.transcript = append(*node.transcript, node.value)
}

// GetNext returns the next node, or nil past the end of the list.
func (node *SealedListNode) GetNext() *SealedListNode {
	return node.next
}

// Verdict reports the observable effect: the exact sequence of printed
// values.
func (node *SealedListNode) Verdict() []any {
	out := make([]any, 0, len(*node.transcript))
	for _, v := range *node.transcript {
		out = append(out, v)
	}
	return out
}
