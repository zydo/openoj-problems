package main

type JobBoard struct{}

func NewJobBoardTyped(jobs [][]int) *JobBoard {
	panic("TODO")
}

func (design *JobBoard) post(userId int, jobId int, priority int) {
	panic("TODO")
}

func (design *JobBoard) reprioritize(jobId int, newPriority int) {
	panic("TODO")
}

func (design *JobBoard) withdraw(jobId int) {
	panic("TODO")
}

func (design *JobBoard) runTop() int {
	panic("TODO")
}
