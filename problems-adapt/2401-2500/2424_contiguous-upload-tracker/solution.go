package main

// Uploaded marks in a boolean array plus a prefix pointer that only
// moves forward. markUploaded() sets one mark; longestReadyPrefix() advances the pointer
// while the next video is already uploaded. The pointer never retreats,
// so its total travel across all calls is bounded by n and every query
// is amortized constant.
type UploadPrefixTracker struct {
	n        int
	uploaded []bool
	prefix   int
}

func NewUploadPrefixTrackerTyped(n int) *UploadPrefixTracker {
	return &UploadPrefixTracker{n: n, uploaded: make([]bool, n+1), prefix: 0}
}

func (design *UploadPrefixTracker) markUploaded(video int) {
	design.uploaded[video] = true
}

func (design *UploadPrefixTracker) longestReadyPrefix() int {
	for design.prefix < design.n && design.uploaded[design.prefix+1] {
		design.prefix++
	}
	return design.prefix
}
