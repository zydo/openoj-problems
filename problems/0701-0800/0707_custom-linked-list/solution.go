package main

// A singly linked list behind a sentinel head, with the length kept in a
// counter so every index check is a comparison instead of a walk: all insert
// positions funnel through addAtIndex, and the boundary rules (index ==
// length appends, index > length is a no-op, invalid reads return -1,
// invalid deletes are skipped) live in exactly one place each.
type cell struct {
	val  int
	next *cell
}

type CustomLinkedList struct {
	head *cell // sentinel: always present, never carries data
	size int
}

func NewCustomLinkedListTyped() *CustomLinkedList {
	return &CustomLinkedList{head: &cell{}}
}

func (design *CustomLinkedList) get(index int) int {
	if index < 0 || index >= design.size {
		return -1
	}
	return design.before(index).next.val
}

func (design *CustomLinkedList) addAtHead(val int) {
	design.addAtIndex(0, val)
}

func (design *CustomLinkedList) addAtTail(val int) {
	design.addAtIndex(design.size, val)
}

func (design *CustomLinkedList) addAtIndex(index int, val int) {
	if index > design.size {
		return
	}
	if index < 0 {
		index = 0
	}
	front := design.before(index)
	front.next = &cell{val: val, next: front.next}
	design.size++
}

func (design *CustomLinkedList) deleteAtIndex(index int) {
	if index < 0 || index >= design.size {
		return
	}
	front := design.before(index)
	front.next = front.next.next
	design.size--
}

// before returns the cell in front of position index, for 0 <= index <=
// size: the sentinel for index 0, the (index-1)-th cell otherwise.
func (design *CustomLinkedList) before(index int) *cell {
	front := design.head
	for step := 0; step < index; step++ {
		front = front.next
	}
	return front
}
