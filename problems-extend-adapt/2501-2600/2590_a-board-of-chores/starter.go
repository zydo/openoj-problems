package main

type ChoreBoard struct{}

func NewChoreBoardTyped() *ChoreBoard {
	panic("TODO")
}

func (design *ChoreBoard) addTask(userId int, taskDescription string, dueDate int, tags []string) int {
	panic("TODO")
}

func (design *ChoreBoard) getAllTasks(userId int) []string {
	panic("TODO")
}

func (design *ChoreBoard) getTasksForTag(userId int, tag string) []string {
	panic("TODO")
}

func (design *ChoreBoard) completeTask(userId int, taskId int) {
	panic("TODO")
}
