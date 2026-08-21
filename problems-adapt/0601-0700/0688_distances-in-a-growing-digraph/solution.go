package main

import (
	"container/heap"
	"math"
)

type Graph struct {
	adjacency [][][2]int
}

func NewGraphTyped(n int, edges [][]int) *Graph {
	// Edges are only appended, never removed or reweighted, so a
	// plain adjacency list never needs invalidating or rebuilding.
	graph := &Graph{adjacency: make([][][2]int, n)}
	for _, edge := range edges {
		graph.addEdge(edge)
	}
	return graph
}

func (design *Graph) addEdge(edge []int) {
	source, target, cost := edge[0], edge[1], edge[2]
	design.adjacency[source] = append(design.adjacency[source], [2]int{target, cost})
}

type frontierItem struct {
	distance int
	node     int
}

type frontier []frontierItem

func (f frontier) Len() int            { return len(f) }
func (f frontier) Less(i, j int) bool  { return f[i].distance < f[j].distance }
func (f frontier) Swap(i, j int)       { f[i], f[j] = f[j], f[i] }
func (f *frontier) Push(item any)      { *f = append(*f, item.(frontierItem)) }
func (f *frontier) Pop() any {
	old := *f
	item := old[len(old)-1]
	*f = old[:len(old)-1]
	return item
}

func (design *Graph) shortestPath(node1 int, node2 int) int {
	if node1 == node2 {
		return 0
	}
	// Every cost is positive, so Dijkstra applies: the min-heap
	// hands out nodes in settle order by tentative distance.
	distance := make([]int, len(design.adjacency))
	for i := range distance {
		distance[i] = math.MaxInt64
	}
	distance[node1] = 0
	queue := &frontier{{0, node1}}
	for queue.Len() > 0 {
		item := heap.Pop(queue).(frontierItem)
		// Stale entry: the node was already settled through a
		// cheaper route, so skip it.
		if item.distance > distance[item.node] {
			continue
		}
		// Popping node2 settles it, so its distance is final here.
		if item.node == node2 {
			return item.distance
		}
		for _, edge := range design.adjacency[item.node] {
			candidate := item.distance + edge[1]
			// Only improving relaxations push a fresh entry, so any
			// entry goes stale at most once.
			if candidate < distance[edge[0]] {
				distance[edge[0]] = candidate
				heap.Push(queue, frontierItem{candidate, edge[0]})
			}
		}
	}
	return -1
}
