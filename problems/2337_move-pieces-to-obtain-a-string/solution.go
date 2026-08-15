func canChange(start string, target string) bool {
	type piece struct {
		i int
		c byte
	}
	var s, t []piece
	for i := 0; i < len(start); i++ {
		if start[i] != '_' {
			s = append(s, piece{i, start[i]})
		}
	}
	for i := 0; i < len(target); i++ {
		if target[i] != '_' {
			t = append(t, piece{i, target[i]})
		}
	}
	if len(s) != len(t) {
		return false
	}
	for p := range s {
		i, ci := s[p].i, s[p].c
		j, cj := t[p].i, t[p].c
		if ci != cj {
			return false
		}
		if ci == 'L' && i < j {
			return false
		}
		if ci == 'R' && i > j {
			return false
		}
	}
	return true
}
