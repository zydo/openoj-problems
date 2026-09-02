package main

// A bit array plus a lazy orientation flag. The stored byte always
// means "effective bit XOR flag", so fix/unfix complement their write
// while the set is flipped, flip() only toggles the flag and re-derives
// ones as size - ones, and all/one/count just read the counter.
// toString is the one place every bit passes through the flag again.
type BitPanel struct {
	bits    []byte
	flipped bool
	ones    int
}

func NewBitPanelTyped(size int) *BitPanel {
	return &BitPanel{bits: make([]byte, size)}
}

func (design *BitPanel) fix(idx int) {
	flag := byte(0)
	if design.flipped {
		flag = 1
	}
	if design.bits[idx]^flag == 0 {
		design.bits[idx] = 1 - flag
		design.ones++
	}
}

func (design *BitPanel) unfix(idx int) {
	flag := byte(0)
	if design.flipped {
		flag = 1
	}
	if design.bits[idx]^flag == 1 {
		design.bits[idx] = flag
		design.ones--
	}
}

func (design *BitPanel) flip() {
	design.flipped = !design.flipped
	design.ones = len(design.bits) - design.ones
}

func (design *BitPanel) all() bool {
	return design.ones == len(design.bits)
}

func (design *BitPanel) one() bool {
	return design.ones > 0
}

func (design *BitPanel) count() int {
	return design.ones
}

func (design *BitPanel) toString() string {
	flag := byte(0)
	if design.flipped {
		flag = 1
	}
	composition := make([]byte, len(design.bits))
	for index, bit := range design.bits {
		composition[index] = '0' + bit ^ flag
	}
	return string(composition)
}
