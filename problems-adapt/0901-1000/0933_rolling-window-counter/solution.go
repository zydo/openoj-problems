// A queue of record times: record(t) appends t, evicts everything older
// than the window's left edge t-3000 off the front — a time below
// that edge is below every future edge too, since t only grows — and
// returns how many times remain.
type RollingWindowCounter struct {
	times []int
}

func NewRollingWindowCounterTyped() *RollingWindowCounter {
	return &RollingWindowCounter{}
}

func (design *RollingWindowCounter) record(t int) int {
	design.times = append(design.times, t)
	for design.times[0] < t-3000 {
		// Slicing off the front retires the expired record in O(1); the
		// left edge t-3000 only moves right, so it never re-enters.
		design.times = design.times[1:]
	}
	return len(design.times)
}
