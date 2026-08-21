package main

type TransitLog struct{}

func NewTransitLogTyped() *TransitLog {
	panic("TODO")
}

func (design *TransitLog) tapIn(id int, stop string, t int) {
	panic("TODO")
}

func (design *TransitLog) tapOut(id int, stop string, t int) {
	panic("TODO")
}

func (design *TransitLog) averageTrip(fromStop string, toStop string) float64 {
	panic("TODO")
}
