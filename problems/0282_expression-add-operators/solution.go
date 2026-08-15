import "strconv"

func addOperators(num string, target int) []string {
	n := len(num)
	results := []string{}

	// num.length <= 10, so every operand is < 1e10 and any run of '*'
	// operands stays under ~1e10; the running total never exceeds ~1e11,
	// which fits comfortably in an int64.
	var dfs func(index int, prev, current int64, expression []byte)
	dfs = func(index int, prev, current int64, expression []byte) {
		if index == n {
			if current == int64(target) {
				results = append(results, string(expression))
			}
			return
		}
		var nxt int64
		for end := index; end < n; end++ {
			if end != index && num[index] == '0' {
				break
			}
			nxt = nxt*10 + int64(num[end]-'0')
			lengthBefore := len(expression)
			if index == 0 {
				dfs(end+1, nxt, nxt, append(expression, []byte(strconv.FormatInt(nxt, 10))...))
			} else {
				dfs(end+1, nxt, current+nxt, append(expression, append([]byte{'+'}, []byte(strconv.FormatInt(nxt, 10))...)...))
				dfs(end+1, -nxt, current-nxt, append(expression[:lengthBefore], append([]byte{'-'}, []byte(strconv.FormatInt(nxt, 10))...)...))
				dfs(end+1, prev*nxt, current-prev+prev*nxt, append(expression[:lengthBefore], append([]byte{'*'}, []byte(strconv.FormatInt(nxt, 10))...)...))
			}
			expression = expression[:lengthBefore]
		}
	}

	dfs(0, 0, 0, make([]byte, 0, 64))
	return results
}
