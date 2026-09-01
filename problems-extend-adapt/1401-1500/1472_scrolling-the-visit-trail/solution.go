type VisitTrail struct {
	history []string
	cur     int
}

func NewVisitTrailTyped(homepage string) *VisitTrail {
	return &VisitTrail{history: []string{homepage}, cur: 0}
}

func (design *VisitTrail) visit(url string) {
	design.history = design.history[:design.cur+1]
	design.history = append(design.history, url)
	design.cur++
}

func (design *VisitTrail) back(steps int) string {
	design.cur -= steps
	if design.cur < 0 {
		design.cur = 0
	}
	return design.history[design.cur]
}

func (design *VisitTrail) forward(steps int) string {
	design.cur += steps
	if limit := len(design.history) - 1; design.cur > limit {
		design.cur = limit
	}
	return design.history[design.cur]
}
