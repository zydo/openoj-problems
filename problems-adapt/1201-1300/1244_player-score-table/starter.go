package main

type ScoreTable struct{}

func NewScoreTableTyped() *ScoreTable {
	panic("TODO")
}

func (design *ScoreTable) recordScore(playerId int, score int) {
	panic("TODO")
}

func (design *ScoreTable) topScores(K int) int64 {
	panic("TODO")
}

func (design *ScoreTable) reset(playerId int) {
	panic("TODO")
}
