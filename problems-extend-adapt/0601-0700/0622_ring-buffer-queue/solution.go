package main

// A fixed buffer, a head index, and an occupied count: the count (not a
// tail index) distinguishes full from empty, so all k slots are usable;
// the tail position is always derivable as (head + count) % k.
type RingBufferQueue struct {
	buf   []int
	head  int
	count int
}

func NewRingBufferQueueTyped(k int) *RingBufferQueue {
	return &RingBufferQueue{buf: make([]int, k)}
}

func (design *RingBufferQueue) enQueue(value int) bool {
	if design.count == len(design.buf) {
		return false
	}
	// The write slot is one past the current rear, modulo the ring.
	design.buf[(design.head+design.count)%len(design.buf)] = value
	design.count++
	return true
}

func (design *RingBufferQueue) deQueue() bool {
	if design.count == 0 {
		return false
	}
	// Nothing to erase: the old head slot is simply written over once
	// the ring wraps back to it.
	design.head = (design.head + 1) % len(design.buf)
	design.count--
	return true
}

func (design *RingBufferQueue) Front() int {
	if design.count == 0 {
		return -1
	}
	return design.buf[design.head]
}

func (design *RingBufferQueue) Rear() int {
	if design.count == 0 {
		return -1
	}
	return design.buf[(design.head+design.count-1)%len(design.buf)]
}

func (design *RingBufferQueue) isEmpty() bool {
	return design.count == 0
}

func (design *RingBufferQueue) isFull() bool {
	return design.count == len(design.buf)
}
