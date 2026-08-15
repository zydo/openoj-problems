function largestRectangleArea(heights: number[]): number {
    const n = heights.length;
    const stack: number[] = [];
    let best = 0;
    for (let i = 0; i <= n; i++) {
        const h = i === n ? 0 : heights[i];
        while (stack.length > 0 && heights[stack[stack.length - 1]] > h) {
            const height = heights[stack.pop()!];
            const left = stack.length > 0 ? stack[stack.length - 1] : -1;
            const area = height * (i - left - 1);
            if (area > best) best = area;
        }
        stack.push(i);
    }
    return best;
}
