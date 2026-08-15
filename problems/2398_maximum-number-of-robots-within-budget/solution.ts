function maximumRobots(
    chargeTimes: number[],
    runningCosts: number[],
    budget: number,
): number {
    const n = chargeTimes.length;
    const dq: number[] = []; // indices with decreasing chargeTimes
    let head = 0; // front of the deque
    let run = 0;
    let left = 0;
    let best = 0;
    for (let right = 0; right < n; right++) {
        while (
            dq.length > head &&
            chargeTimes[dq[dq.length - 1]] <= chargeTimes[right]
        ) {
            dq.pop();
        }
        dq.push(right);
        run += runningCosts[right];
        while (
            dq.length > head &&
            chargeTimes[dq[head]] + (right - left + 1) * run > budget
        ) {
            if (dq[head] === left) {
                head++;
            }
            run -= runningCosts[left];
            left++;
        }
        best = Math.max(best, right - left + 1);
    }
    return best;
}
