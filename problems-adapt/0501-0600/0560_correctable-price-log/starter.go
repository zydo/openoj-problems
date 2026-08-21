package main

type PriceLog struct{}

func NewPriceLogTyped() *PriceLog {
	panic("TODO")
}

func (design *PriceLog) record(timestamp int, price int) {
	panic("TODO")
}

func (design *PriceLog) latest() int {
	panic("TODO")
}

func (design *PriceLog) highest() int {
	panic("TODO")
}

func (design *PriceLog) lowest() int {
	panic("TODO")
}
