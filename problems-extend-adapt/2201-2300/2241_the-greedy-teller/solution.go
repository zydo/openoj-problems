func NewTellerTyped() *Teller {
	return &Teller{counts: make([]int64, 5)}
}

type Teller struct {
	counts []int64
}

var denoms = [5]int64{20, 50, 100, 200, 500}

func (design *Teller) deposit(banknotesCount []int64) {
	for i := 0; i < 5; i++ {
		design.counts[i] += banknotesCount[i]
	}
}

func (design *Teller) withdraw(amount int64) []int64 {
	taken := make([]int64, 5)
	remaining := amount
	for i := 4; i >= 0; i-- {
		take := remaining / denoms[i]
		if take > design.counts[i] {
			take = design.counts[i]
		}
		taken[i] = take
		remaining -= take * denoms[i]
	}
	if remaining != 0 {
		return []int64{-1}
	}
	for i := 0; i < 5; i++ {
		design.counts[i] -= taken[i]
	}
	return taken
}
