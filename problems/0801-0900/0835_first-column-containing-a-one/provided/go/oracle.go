package main

// Problem-provided oracle (BitMatrix), Go side. Compiled beside every
// submission by the judge; never editable in the editor. Constructed
// from the case state: the hidden grid rows as generic values, then the
// query budget.
type BitMatrix struct {
	rows   [][]int
	budget int64
}

// NewBitMatrix builds the oracle from the case's construction values
// (the grid rows as one generic slice of row slices) and the query
// budget.
func NewBitMatrix(construction []any, budget int64) *BitMatrix {
	grid, ok := construction[0].([]any)
	if !ok {
		panic("BitMatrix rows must be an array")
	}
	rows := make([][]int, 0, len(grid))
	for _, raw := range grid {
		entries, ok := raw.([]any)
		if !ok {
			panic("BitMatrix rows must be arrays")
		}
		values := make([]int, 0, len(entries))
		for _, entry := range entries {
			value, ok := entry.(int64)
			if !ok {
				panic("BitMatrix entries must be integers")
			}
			values = append(values, int(value))
		}
		rows = append(rows, values)
	}
	return &BitMatrix{rows: rows, budget: budget}
}

// Get returns the entry at (row, col).
func (matrix *BitMatrix) Get(row int, col int) int {
	if matrix.budget <= 0 {
		panic("BitMatrix query budget exhausted")
	}
	matrix.budget--
	return matrix.rows[row][col]
}

// Dimensions returns the shape as [rows, cols].
func (matrix *BitMatrix) Dimensions() []int {
	cols := 0
	if len(matrix.rows) > 0 {
		cols = len(matrix.rows[0])
	}
	return []int{len(matrix.rows), cols}
}
