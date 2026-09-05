package main

type Solution struct{}

func (solution *Solution) findNumber(restlessNumber *RestlessNumber) int {
	// Query 0 first: it agrees wherever n is 0, counting every zero among
	// the low 30 bits and leaving n untouched. For a single-bit probe
	// num = 2^i asked while n is whole, the answer is base+1 when bit i is
	// set (the probe agrees there too) and base-1 when it is clear. Every
	// query flips that one bit of state, so each mask is asked twice: XOR
	// with the same num reverts the effect.
	base := restlessNumber.CommonBits(0)
	n := 0
	for i := 0; i < 30; i++ {
		if restlessNumber.CommonBits(1<<i) > base {
			n |= 1 << i
		}
		restlessNumber.CommonBits(1 << i)
	}
	return n
}
