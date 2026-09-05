package main

type Ledger struct{}

func NewLedgerTyped(balance []int64) *Ledger {
	panic("TODO")
}

func (design *Ledger) transfer(account1 int, account2 int, money int64) bool {
	panic("TODO")
}

func (design *Ledger) deposit(account int, money int64) bool {
	panic("TODO")
}

func (design *Ledger) withdraw(account int, money int64) bool {
	panic("TODO")
}
