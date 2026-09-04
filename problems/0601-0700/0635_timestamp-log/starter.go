package main

type TimestampLog struct{}

func NewTimestampLogTyped() *TimestampLog {
	panic("TODO")
}

func (design *TimestampLog) put(id int, timestamp string) {
	panic("TODO")
}

func (design *TimestampLog) retrieve(start string, end string, granularity string) []int {
	panic("TODO")
}
