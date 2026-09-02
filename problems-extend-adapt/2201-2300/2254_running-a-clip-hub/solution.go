package main

import "container/heap"

type Video struct {
	content  string
	likes    int64
	dislikes int64
	views    int64
}

type ClipHub struct {
	videos  map[int]*Video
	freeIDs intHeap
}

type intHeap []int

func (h intHeap) Len() int            { return len(h) }
func (h intHeap) Less(i, j int) bool  { return h[i] < h[j] }
func (h intHeap) Swap(i, j int)       { h[i], h[j] = h[j], h[i] }
func (h *intHeap) Push(x interface{}) { *h = append(*h, x.(int)) }
func (h *intHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func NewClipHubTyped() *ClipHub {
	return &ClipHub{videos: make(map[int]*Video)}
}

func (design *ClipHub) upload(video string) int {
	var id int
	if len(design.freeIDs) > 0 {
		id = heap.Pop(&design.freeIDs).(int)
	} else {
		id = len(design.videos)
	}
	design.videos[id] = &Video{content: video}
	return id
}

func (design *ClipHub) remove(videoId int) {
	if _, ok := design.videos[videoId]; ok {
		delete(design.videos, videoId)
		heap.Push(&design.freeIDs, videoId)
	}
}

func (design *ClipHub) watch(videoId int, startMinute int, endMinute int) string {
	video, ok := design.videos[videoId]
	if !ok {
		return "-1"
	}
	video.views++
	end := endMinute
	if end > len(video.content)-1 {
		end = len(video.content) - 1
	}
	return video.content[startMinute : end+1]
}

func (design *ClipHub) like(videoId int) {
	if video, ok := design.videos[videoId]; ok {
		video.likes++
	}
}

func (design *ClipHub) dislike(videoId int) {
	if video, ok := design.videos[videoId]; ok {
		video.dislikes++
	}
}

func (design *ClipHub) getLikesAndDislikes(videoId int) []int {
	video, ok := design.videos[videoId]
	if !ok {
		return []int{-1}
	}
	return []int{int(video.likes), int(video.dislikes)}
}

func (design *ClipHub) getViews(videoId int) int {
	video, ok := design.videos[videoId]
	if !ok {
		return -1
	}
	return int(video.views)
}
