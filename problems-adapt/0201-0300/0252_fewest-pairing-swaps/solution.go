func fewestPairingSwaps(line []int) int {
	arr := make([]int, len(line))
	copy(arr, line)
	n := len(arr)
	pos := make([]int, n)
	for i, value := range arr {
		pos[value] = i
	}

	swaps := 0
	for i := 0; i < n; i += 2 {
		first := arr[i]
		partner := first ^ 1 // partners are (0,1), (2,3), ...
		if arr[i+1] == partner {
			continue
		}
		j := pos[partner]
		other := arr[i+1]
		arr[i+1] = partner
		arr[j] = other
		pos[partner] = i + 1
		pos[other] = j
		swaps++
	}
	return swaps
}
