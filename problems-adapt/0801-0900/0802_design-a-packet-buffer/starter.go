package main

type PacketBuffer struct{}

func NewPacketBufferTyped(capacity int) *PacketBuffer {
	panic("TODO")
}

func (design *PacketBuffer) receive(source int, destination int, timestamp int) bool {
	panic("TODO")
}

func (design *PacketBuffer) dispatch() []int {
	panic("TODO")
}

func (design *PacketBuffer) countInWindow(destination int, startTime int, endTime int) int {
	panic("TODO")
}
