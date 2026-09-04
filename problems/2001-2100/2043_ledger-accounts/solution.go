package main

type Ledger struct {
	balance []int64
}

func NewLedgerTyped(balance []int64) *Ledger {
	return &Ledger{balance: append([]int64(nil), balance...)}
}

func (ledger *Ledger) transfer(account1 int, account2 int, money int64) bool {
	if !ledger.valid(account1) || !ledger.valid(account2) || ledger.balance[account1-1] < money {
		return false
	}
	ledger.balance[account1-1] -= money
	ledger.balance[account2-1] += money
	return true
}

func (ledger *Ledger) deposit(account int, money int64) bool {
	if !ledger.valid(account) {
		return false
	}
	ledger.balance[account-1] += money
	return true
}

func (ledger *Ledger) withdraw(account int, money int64) bool {
	if !ledger.valid(account) || ledger.balance[account-1] < money {
		return false
	}
	ledger.balance[account-1] -= money
	return true
}

func (ledger *Ledger) valid(account int) bool {
	return account >= 1 && account <= len(ledger.balance)
}
