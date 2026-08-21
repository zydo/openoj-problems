package main

import "sort"

// Problem-provided oracle (Sweeper), Go side. Compiled beside every
// submission by the judge; never editable in the editor. Constructed
// from the case state: the room grid and the start cell as generic
// values, then the operation budget.
type Sweeper struct {
	room    [][]int
	row     int
	col     int
	face    int // starts facing up
	cleaned map[[2]int]bool
	budget  int64
}

var sweeperDirections = [4][2]int{{-1, 0}, {0, 1}, {1, 0}, {0, -1}} // up, right, down, left

// NewSweeper builds the oracle from the case's construction values
// (the room grid and the start cell) and the operation budget.
func NewSweeper(construction []any, budget int64) *Sweeper {
	roomData, ok := construction[0].([]any)
	if !ok {
		panic("Sweeper room must be an array")
	}
	room := make([][]int, 0, len(roomData))
	for _, rowData := range roomData {
		row, ok := rowData.([]any)
		if !ok {
			panic("Sweeper room rows must be arrays")
		}
		cells := make([]int, 0, len(row))
		for _, item := range row {
			value, ok := item.(int64)
			if !ok {
				panic("Sweeper room cells must be integers")
			}
			cells = append(cells, int(value))
		}
		room = append(room, cells)
	}
	start, ok := construction[1].([]any)
	if !ok || len(start) != 2 {
		panic("Sweeper start must be a pair of integers")
	}
	rowValue, ok := start[0].(int64)
	if !ok {
		panic("Sweeper start must be a pair of integers")
	}
	colValue, ok := start[1].(int64)
	if !ok {
		panic("Sweeper start must be a pair of integers")
	}
	sweeper := &Sweeper{
		room: room,
		row:  int(rowValue),
		col:  int(colValue),
		// face 0 = up
		cleaned: make(map[[2]int]bool),
		budget:  budget,
	}
	sweeper.Clean()
	return sweeper
}

func (sweeper *Sweeper) spend() {
	if sweeper.budget <= 0 {
		panic("Sweeper operation budget exhausted")
	}
	sweeper.budget--
}

// Move steps one cell forward when that cell is open, reporting
// success; a wall or blocked cell leaves the sweeper in place.
func (sweeper *Sweeper) Move() bool {
	sweeper.spend()
	nr := sweeper.row + sweeperDirections[sweeper.face][0]
	nc := sweeper.col + sweeperDirections[sweeper.face][1]
	if nr < 0 || nr >= len(sweeper.room) || nc < 0 || nc >= len(sweeper.room[nr]) || sweeper.room[nr][nc] == 0 {
		return false // wall or blocked cell: stays in place
	}
	sweeper.row, sweeper.col = nr, nc
	return true
}

// TurnLeft pivots a quarter turn counter-clockwise in place.
func (sweeper *Sweeper) TurnLeft() {
	sweeper.spend()
	sweeper.face = (sweeper.face + 3) % 4
}

// TurnRight pivots a quarter turn clockwise in place.
func (sweeper *Sweeper) TurnRight() {
	sweeper.spend()
	sweeper.face = (sweeper.face + 1) % 4
}

// Clean marks the cell under the sweeper as cleaned.
func (sweeper *Sweeper) Clean() {
	sweeper.spend()
	sweeper.cleaned[[2]int{sweeper.row, sweeper.col}] = true
}

// Verdict reports every cleaned cell, in row-major order.
func (sweeper *Sweeper) Verdict() any {
	cells := make([][]int, 0, len(sweeper.cleaned))
	for cell := range sweeper.cleaned {
		cells = append(cells, []int{cell[0], cell[1]})
	}
	sort.Slice(cells, func(i, j int) bool {
		if cells[i][0] != cells[j][0] {
			return cells[i][0] < cells[j][0]
		}
		return cells[i][1] < cells[j][1]
	})
	return cells
}
