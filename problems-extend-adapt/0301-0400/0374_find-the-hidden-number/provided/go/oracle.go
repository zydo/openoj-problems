package main

// Problem-provided oracle (NumberJudge), Go side. Compiled beside every
// submission by the judge; never editable in the editor. Constructed
// from the case state: the hidden picked number as a generic value,
// then the query budget.
type NumberJudge struct {
	pick   int64
	budget int64
}

// NewNumberJudge builds the oracle from the case's construction value (the
// hidden picked number) and the query budget.
func NewNumberJudge(construction []any, budget int64) *NumberJudge {
	pick, ok := construction[0].(int64)
	if !ok {
		panic("NumberJudge pick must be an integer")
	}
	return &NumberJudge{pick: pick, budget: budget}
}

// NumberJudge reports how num compares to the picked number: -1 when num sits
// above it, 1 when below it, 0 when exactly it.
func (guess *NumberJudge) NumberJudge(num int) int {
	if guess.budget <= 0 {
		panic("NumberJudge query budget exhausted")
	}
	guess.budget--
	if int64(num) > guess.pick {
		return -1
	}
	if int64(num) < guess.pick {
		return 1
	}
	return 0
}
