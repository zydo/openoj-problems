import "strconv"

func evaluateExpression(expression string) int64 {
	pos := 0
	return evalExpr(expression, &pos)
}

func evalExpr(expr string, pos *int) int64 {
	ch := expr[*pos]
	if ch == '-' || (ch >= '0' && ch <= '9') {
		j := *pos
		if ch == '-' {
			j++
		}
		for j < len(expr) && expr[j] >= '0' && expr[j] <= '9' {
			j++
		}
		v, _ := strconv.ParseInt(expr[*pos:j], 10, 64)
		*pos = j
		return v
	}
	op := expr[*pos : *pos+3]
	*pos += 4
	a := evalExpr(expr, pos)
	*pos++ // skip ","
	b := evalExpr(expr, pos)
	*pos++ // skip ")"
	switch op {
	case "add":
		return a + b
	case "sub":
		return a - b
	case "mul":
		return a * b
	default:
		return a / b
	}
}
