func pushDominoes(dominoes string) string {
	n := len(dominoes)
	forces := make([]int, n)
	f := 0
	for i := 0; i < n; i++ {
		switch dominoes[i] {
		case 'R':
			f = n
		case 'L':
			f = 0
		default:
			if f > 0 {
				f--
			}
		}
		forces[i] += f
	}
	f = 0
	for i := n - 1; i >= 0; i-- {
		switch dominoes[i] {
		case 'L':
			f = n
		case 'R':
			f = 0
		default:
			if f > 0 {
				f--
			}
		}
		forces[i] -= f
	}
	res := make([]byte, n)
	for i := 0; i < n; i++ {
		if forces[i] > 0 {
			res[i] = 'R'
		} else if forces[i] < 0 {
			res[i] = 'L'
		} else {
			res[i] = '.'
		}
	}
	return string(res)
}
