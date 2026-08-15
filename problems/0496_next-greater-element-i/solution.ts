function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const nextGreater = new Map<number, number>();
    const stack: number[] = [];
    for (const value of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < value) {
            nextGreater.set(stack.pop()!, value);
        }
        stack.push(value);
    }
    for (const value of stack) {
        nextGreater.set(value, -1);
    }
    return nums1.map((value) => nextGreater.get(value)!);
}
