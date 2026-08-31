package main

type NumberPool struct{}

func NewNumberPoolTyped(maxNumbers int) *NumberPool {
	panic("TODO")
}

func (design *NumberPool) acquire() int {
	panic("TODO")
}

func (design *NumberPool) isAvailable(number int) bool {
	panic("TODO")
}

func (design *NumberPool) returnNumber(number int) {
	panic("TODO")
}
