func maxArea(height []int) int64 {
	left, right := 0, len(height)-1
	best := int64(0)
	for left < right {
		h := height[left]
		if height[right] < h {
			h = height[right]
		}
		area := int64(right-left) * int64(h)
		if area > best {
			best = area
		}
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return best
}
