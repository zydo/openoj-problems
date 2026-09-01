package main

type PostTally struct{}

func NewPostTallyTyped() *PostTally {
	panic("TODO")
}

func (design *PostTally) recordPost(name string, time int64) {
	panic("TODO")
}

func (design *PostTally) countsPerInterval(span string, name string, startTime int64, endTime int64) []int {
	panic("TODO")
}
