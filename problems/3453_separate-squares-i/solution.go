func separateSquares(squares [][]int) float64 {
	total := int64(0) // exact integer accumulation (mirrors Python's int sum)
	hiTop := int64(-1) << 62
	for _, sq := range squares {
		l := int64(sq[2])
		total += l * l
		top := int64(sq[1]) + l
		if top > hiTop {
			hiTop = top
		}
	}
	target := float64(total) / 2.0
	lo := 0.0
	hi := float64(hiTop)
	for it := 0; it < 60; it++ {
		mid := (lo + hi) / 2.0
		below := 0.0
		for _, sq := range squares {
			y := int64(sq[1])
			l := int64(sq[2])
			if mid <= float64(y) {
				continue
			}
			top := y + l
			m := mid
			if mid >= float64(top) {
				m = float64(top)
			}
			below += (m - float64(y)) * float64(l)
		}
		if below >= target {
			hi = mid
		} else {
			lo = mid
		}
	}
	return hi
}
