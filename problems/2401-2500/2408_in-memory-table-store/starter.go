package main

type TableStore struct{}

func NewTableStoreTyped(names []string, columns []int) *TableStore {
	panic("TODO")
}

func (design *TableStore) insertRow(name string, row []string) bool {
	panic("TODO")
}

func (design *TableStore) deleteRow(name string, rowId int) {
	panic("TODO")
}

func (design *TableStore) readCell(name string, rowId int, columnId int) string {
	panic("TODO")
}

func (design *TableStore) exportRows(name string) []string {
	panic("TODO")
}
