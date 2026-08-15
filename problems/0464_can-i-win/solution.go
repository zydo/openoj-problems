func canIWin(maxChoosableInteger int, desiredTotal int) bool {
	if desiredTotal <= 0 {
		return true
	}
	if maxChoosableInteger*(maxChoosableInteger+1)/2 < desiredTotal {
		return false
	}
	memo := make([]int8, 1<<uint(maxChoosableInteger))
	for i := range memo {
		memo[i] = -1
	}

	var canWin func(state int, remaining int) bool
	canWin = func(state int, remaining int) bool {
		if memo[state] != -1 {
			return memo[state] == 1
		}
		for choice := 1; choice <= maxChoosableInteger; choice++ {
			bit := 1 << uint(choice-1)
			if state&bit != 0 {
				continue
			}
			if choice >= remaining || !canWin(state|bit, remaining-choice) {
				memo[state] = 1
				return true
			}
		}
		memo[state] = 0
		return false
	}

	return canWin(0, desiredTotal)
}
