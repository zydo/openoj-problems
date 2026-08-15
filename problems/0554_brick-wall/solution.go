func leastBricks(wall [][]int) int {
	edgeCounts := make(map[int]int)
	for _, row := range wall {
		position := 0
		for i := 0; i+1 < len(row); i++ {
			position += row[i]
			edgeCounts[position]++
		}
	}
	bestEdges := 0
	for _, count := range edgeCounts {
		if count > bestEdges {
			bestEdges = count
		}
	}
	return len(wall) - bestEdges
}
