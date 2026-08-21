package main

type HistoryStore struct{}

func NewHistoryStoreTyped() *HistoryStore {
	panic("TODO")
}

func (design *HistoryStore) set(key string, value string, timestamp int) {
	panic("TODO")
}

func (design *HistoryStore) get(key string, timestamp int) string {
	panic("TODO")
}
