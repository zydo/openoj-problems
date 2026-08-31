// Two coordinates — a row pointer and a column pointer — advanced lazily
// over the vector exactly as it stands: the pair is only moved onto a live
// element when a call needs one, so construction does no work beyond
// remembering the input. hasNext owns the skipping: it walks row past every
// row col has exhausted (empty from the start, or fully served), which lets
// next read vec[row][col] without any special cases.
type FlattenedRowIterator struct {
	vec [][]int
	row int
	col int
}

func NewFlattenedRowIteratorTyped(vec [][]int) *FlattenedRowIterator {
	// No flattened copy here — that laziness is the problem. An empty
	// (or exhausted) row is stepped over only when a call forces it.
	return &FlattenedRowIterator{vec: vec}
}

func (design *FlattenedRowIterator) next() int {
	// Establish the invariant before reading: after this call the
	// coordinates are guaranteed to sit on a live element.
	design.hasNext()
	value := design.vec[design.row][design.col]
	// Step within the row; once it runs dry, the next hasNext() moves on
	// to the next row instead.
	design.col++
	return value
}

func (design *FlattenedRowIterator) hasNext() bool {
	// The invariant repair: skip rows already drained, zeroing the column
	// pointer as each new row is entered.
	for design.row < len(design.vec) && design.col == len(design.vec[design.row]) {
		design.row++
		design.col = 0
	}
	return design.row < len(design.vec)
}
