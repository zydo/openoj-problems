// A lazy single-segment cursor over the compressed string: the iterator
// never expands anything, it holds the current segment's letter, how many
// copies of it are still unspent, and a parse position. nextChar() spends one
// copy and re-parses the nextChar letter-and-count only when the current one
// runs out; counts are read as int64 since a single segment may repeat a
// letter 10^9 times.
type RunLengthCursor struct {
	s     string
	i     int
	ch    byte
	count int64
}

func NewRunLengthCursorTyped(compressedString string) *RunLengthCursor {
	return &RunLengthCursor{s: compressedString}
}

// load parses the nextChar segment: one letter, then its run of digits.
func (design *RunLengthCursor) load() {
	if design.i < len(design.s) {
		design.ch = design.s[design.i]
		design.i++
		var parsed int64
		for design.i < len(design.s) && design.s[design.i] >= '0' && design.s[design.i] <= '9' {
			parsed = parsed*10 + int64(design.s[design.i]-'0')
			design.i++
		}
		design.count = parsed
	}
}

func (design *RunLengthCursor) nextChar() string {
	if design.count == 0 {
		design.load()
	}
	if design.count == 0 {
		// The parse position reached the end: exhausted for good.
		return " "
	}
	design.count--
	return string(design.ch)
}

func (design *RunLengthCursor) hasMore() bool {
	// More to give whenever the current count is positive or an unparsed
	// segment remains (every segment's count is at least 1).
	return design.count > 0 || design.i < len(design.s)
}
