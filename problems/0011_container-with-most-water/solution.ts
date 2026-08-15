function maxArea(height: number[]): number {
    let left = 0,
        right = height.length - 1;
    let best = 0;
    while (left < right) {
        const area = (right - left) * Math.min(height[left], height[right]);
        if (area > best) best = area;
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return best;
}
