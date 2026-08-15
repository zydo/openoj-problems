function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length;
    const answer: number[] = new Array(n).fill(0);
    const stack: number[] = [];
    for (let day = 0; day < n; day++) {
        const temp = temperatures[day];
        while (
            stack.length > 0 &&
            temperatures[stack[stack.length - 1]] < temp
        ) {
            const previous = stack.pop()!;
            answer[previous] = day - previous;
        }
        stack.push(day);
    }
    return answer;
}
