package main

type tripCheckin struct {
	stop string
	time int
}

type tripKey struct {
	from string
	to   string
}

type tripTotal struct {
	sum   int64
	count int64
}

type TransitLog struct {
	checkins map[int]tripCheckin
	totals   map[tripKey]tripTotal
}

func NewTransitLogTyped() *TransitLog {
	return &TransitLog{}
}

func (design *TransitLog) ensure() {
	if design.checkins == nil {
		design.checkins = make(map[int]tripCheckin)
		design.totals = make(map[tripKey]tripTotal)
	}
}

func (design *TransitLog) tapIn(id int, stop string, t int) {
	design.ensure()
	design.checkins[id] = tripCheckin{stop: stop, time: t}
}

func (design *TransitLog) tapOut(id int, stop string, t int) {
	design.ensure()
	start := design.checkins[id]
	delete(design.checkins, id)
	key := tripKey{from: start.stop, to: stop}
	bucket := design.totals[key]
	bucket.sum += int64(t - start.time)
	bucket.count++
	design.totals[key] = bucket
}

func (design *TransitLog) averageTrip(fromStop string, toStop string) float64 {
	bucket := design.totals[tripKey{from: fromStop, to: toStop}]
	return float64(bucket.sum) / float64(bucket.count)
}
