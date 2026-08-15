func rand10(rand7_outputs []int) int {
	index := 0
	for {
		a := rand7_outputs[index]
		b := rand7_outputs[index+1]
		index += 2
		idx := (a-1)*7 + b
		if idx <= 40 {
			return (idx-1)%10 + 1
		}
	}
}
