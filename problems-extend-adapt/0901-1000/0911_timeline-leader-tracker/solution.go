package main

import "sort"

// The lead can only change hands when a vote is cast, so the constructor
// reduces the whole history to one array: it walks the votes once, keeping
// running counts and the current leader, and a ballot that merely ties the
// maximum takes the lead — the most recent vote among the tied candidates.
// leaderAt(t) then only has to locate the last vote at or before t, which is a
// binary search because times is strictly increasing, and read the leader
// recorded there.
type TimelineLeaderTracker struct {
	times   []int
	leaders []int
}

func NewTimelineLeaderTrackerTyped(labels []int, times []int) *TimelineLeaderTracker {
	// person ids are dense in [0, n), so a plain count array indexes them
	counts := make([]int, len(labels))
	leaders := make([]int, len(labels))
	best, leader := 0, 0
	for i, person := range labels {
		counts[person]++
		// a tie at the maximum hands the lead to the caster of this very
		// ballot — the most recent vote among the tied candidates
		if counts[person] >= best {
			best = counts[person]
			leader = person
		}
		leaders[i] = leader
	}
	return &TimelineLeaderTracker{times: times, leaders: leaders}
}

func (design *TimelineLeaderTracker) leaderAt(t int) int {
	// upper bound: the first index past every vote at or before t, so a
	// ballot cast exactly at t counts
	index := sort.Search(len(design.times), func(i int) bool { return design.times[i] > t }) - 1
	return design.leaders[index]
}
