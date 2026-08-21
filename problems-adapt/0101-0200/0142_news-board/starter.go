package main

type NewsBoard struct{}

func NewNewsBoardTyped() *NewsBoard {
	panic("TODO")
}

func (design *NewsBoard) postMessage(userId int, messageId int) {
	panic("TODO")
}

func (design *NewsBoard) getFeed(userId int) []int {
	panic("TODO")
}

func (design *NewsBoard) follow(followerId int, followeeId int) {
	panic("TODO")
}

func (design *NewsBoard) unfollow(followerId int, followeeId int) {
	panic("TODO")
}
