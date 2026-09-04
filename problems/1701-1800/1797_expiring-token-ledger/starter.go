package main

type TokenLedger struct{}

func NewTokenLedgerTyped(timeToLive int) *TokenLedger {
	panic("TODO")
}

func (design *TokenLedger) generate(tokenId string, currentTime int) {
	panic("TODO")
}

func (design *TokenLedger) renew(tokenId string, currentTime int) {
	panic("TODO")
}

func (design *TokenLedger) countUnexpiredTokens(currentTime int) int {
	panic("TODO")
}
