function stepsUntilHigher(readings: number[]): number[] {
    const n = readings.length;
    const answer: number[] = new Array(n).fill(0);
    // Stack of positions still waiting for a higher one; their readings
    // are non-increasing bottom to top. Unanswered positions keep answer 0.
    const stack: number[] = [];
    for (let index = 0; index < n; index++) {
        const reading = readings[index];
        // Strictly higher the current reading resolves each waiting index on top; equal
        // readings leave them waiting (strict < comparison).
        while (stack.length > 0 && readings[stack[stack.length - 1]] < reading) {
            const previous = stack.pop()!;
            answer[previous] = index - previous;
        }
        stack.push(index);
    }
    return answer;
}
