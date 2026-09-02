package main

type ClipHub struct{}

func NewClipHubTyped() *ClipHub {
	panic("TODO")
}

func (design *ClipHub) upload(video string) int {
	panic("TODO")
}

func (design *ClipHub) remove(videoId int) {
	panic("TODO")
}

func (design *ClipHub) watch(videoId int, startMinute int, endMinute int) string {
	panic("TODO")
}

func (design *ClipHub) like(videoId int) {
	panic("TODO")
}

func (design *ClipHub) dislike(videoId int) {
	panic("TODO")
}

func (design *ClipHub) getLikesAndDislikes(videoId int) []int {
	panic("TODO")
}

func (design *ClipHub) getViews(videoId int) int {
	panic("TODO")
}
