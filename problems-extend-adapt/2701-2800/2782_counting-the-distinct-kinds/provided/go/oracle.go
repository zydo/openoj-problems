package main

// Problem-provided oracle (KindOracle), Go side. Compiled beside
// every submission by the judge; never editable in the editor.
// Constructed from the case state: the kinds assignment as a generic
// slice plus the query budget; only HasSameKind reveals it.
type KindOracle struct {
	kinds  []int
	budget int64
}

// NewKindOracle builds the oracle from the case's construction
// values (one generic slice of kinds labels) and the harness-supplied
// budget.
func NewKindOracle(construction []any, budget int64) *KindOracle {
	items, ok := construction[0].([]any)
	if !ok {
		panic("KindOracle kinds must be an array")
	}
	kinds := make([]int, 0, len(items))
	for _, item := range items {
		value, ok := item.(int64)
		if !ok {
			panic("KindOracle kinds must be integers")
		}
		kinds = append(kinds, int(value))
	}
	return &KindOracle{kinds: kinds, budget: budget}
}

func (handler *KindOracle) spend() {
	if handler.budget <= 0 {
		panic("KindOracle query budget exhausted")
	}
	handler.budget--
}

// HasSameKind reports whether elements a and b share a kind;
// out-of-range arguments answer false, per the statement.
func (handler *KindOracle) HasSameKind(a, b int) bool {
	handler.spend()
	if a < 0 || a >= len(handler.kinds) || b < 0 || b >= len(handler.kinds) {
		return false
	}
	return handler.kinds[a] == handler.kinds[b]
}
