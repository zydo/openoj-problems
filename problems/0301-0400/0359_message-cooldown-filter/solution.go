// One map entry per message: the next timestamp it may print at.
type MessageCooldown struct {
	nextAllowed map[string]int
}

func NewMessageCooldownTyped() *MessageCooldown {
	return &MessageCooldown{nextAllowed: make(map[string]int)}
}

func (design *MessageCooldown) allowMessage(timestamp int, message string) bool {
	allowed, printed := design.nextAllowed[message]
	if printed && timestamp < allowed {
		return false
	}
	design.nextAllowed[message] = timestamp + 10
	return true
}
