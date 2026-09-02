package main

type BidBoard struct{}

func NewBidBoardTyped() *BidBoard {
	panic("TODO")
}

func (design *BidBoard) addBid(userId int, itemId int, bidAmount int) {
	panic("TODO")
}

func (design *BidBoard) updateBid(userId int, itemId int, newAmount int) {
	panic("TODO")
}

func (design *BidBoard) removeBid(userId int, itemId int) {
	panic("TODO")
}

func (design *BidBoard) getHighestBidder(itemId int) int {
	panic("TODO")
}
