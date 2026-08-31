package main

type MessageCooldown struct{}

func NewMessageCooldownTyped() *MessageCooldown {
	panic("TODO")
}

func (design *MessageCooldown) allowMessage(timestamp int, message string) bool {
	panic("TODO")
}
