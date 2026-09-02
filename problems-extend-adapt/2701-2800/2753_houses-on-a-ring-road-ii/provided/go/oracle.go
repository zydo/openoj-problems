package main

// Problem-provided oracle (Ring), Go side. Compiled beside every
// submission by the judge; never editable in the editor. Constructed
// from the case state: the door states as a generic slice plus the
// query budget; the agent starts at the first house.
type Ring struct {
	doors    []int
	budget   int64
	position int
}

// NewRing builds the oracle from the case's construction values (one
// generic slice of door states) and the harness-supplied budget.
func NewRing(construction []any, budget int64) *Ring {
	items, ok := construction[0].([]any)
	if !ok {
		panic("Ring doors must be an array")
	}
	doors := make([]int, 0, len(items))
	for _, item := range items {
		value, ok := item.(int64)
		if !ok {
			panic("Ring doors must be integers")
		}
		doors = append(doors, int(value))
	}
	return &Ring{doors: doors, budget: budget}
}

func (ring *Ring) spend() {
	if ring.budget <= 0 {
		panic("Ring query budget exhausted")
	}
	ring.budget--
}

// CloseDoor closes the door of the house the agent is in front of.
func (ring *Ring) CloseDoor() {
	ring.spend()
	ring.doors[ring.position] = 0
}

// IsDoorOpen reports whether the door of the current house is open.
func (ring *Ring) IsDoorOpen() bool {
	ring.spend()
	return ring.doors[ring.position] == 1
}

// MoveRight moves the agent to the right house.
func (ring *Ring) MoveRight() {
	ring.spend()
	ring.position = (ring.position + 1) % len(ring.doors)
}
