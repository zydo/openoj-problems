package main

// A fixed buffer, a head index, and an occupied count: the count (not a
// tail index) distinguishes full from empty, so all k slots are usable;
// both ends are derivable, the rear sits at (head + count - 1) % k and
// the slot a front insert claims at (head - 1 + k) % k.
type RingDeque struct {
	buf   []int
	head  int
	count int
}

func NewRingDequeTyped(k int) *RingDeque {
	return &RingDeque{buf: make([]int, k)}
}

func (design *RingDeque) insertFront(value int) bool {
	if design.count == len(design.buf) {
		return false
	}
	// Step head back one slot, modulo the ring, and write there.
	design.head = (design.head - 1 + len(design.buf)) % len(design.buf)
	design.buf[design.head] = value
	design.count++
	return true
}

func (design *RingDeque) insertLast(value int) bool {
	if design.count == len(design.buf) {
		return false
	}
	// The write slot is one past the current rear, modulo the ring.
	design.buf[(design.head+design.count)%len(design.buf)] = value
	design.count++
	return true
}

func (design *RingDeque) deleteFront() bool {
	if design.count == 0 {
		return false
	}
	// Nothing to erase: the old head slot is simply written over once
	// the ring wraps back to it.
	design.head = (design.head + 1) % len(design.buf)
	design.count--
	return true
}

func (design *RingDeque) deleteLast() bool {
	if design.count == 0 {
		return false
	}
	// The rear slot is derivable, so retiring it is just a count.
	design.count--
	return true
}

func (design *RingDeque) getFront() int {
	if design.count == 0 {
		return -1
	}
	return design.buf[design.head]
}

func (design *RingDeque) getRear() int {
	if design.count == 0 {
		return -1
	}
	return design.buf[(design.head+design.count-1)%len(design.buf)]
}

func (design *RingDeque) isEmpty() bool {
	return design.count == 0
}

func (design *RingDeque) isFull() bool {
	return design.count == len(design.buf)
}
