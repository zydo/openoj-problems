function survivedRobotsHealths(
    positions: number[],
    healths: number[],
    directions: string,
): number[] {
    const h = healths.slice();
    const n = positions.length;
    const order = Array.from({ length: n }, (_, i) => i);
    order.sort((a, b) => positions[a] - positions[b]);
    const stack: number[] = [];
    for (const idx of order) {
        if (directions[idx] === "R") {
            stack.push(idx);
        } else {
            let alive = true;
            while (
                stack.length > 0 &&
                directions[stack[stack.length - 1]] === "R"
            ) {
                const top = stack[stack.length - 1];
                if (h[top] < h[idx]) {
                    h[idx] -= 1;
                    stack.pop();
                } else if (h[top] > h[idx]) {
                    h[top] -= 1;
                    alive = false;
                    break;
                } else {
                    stack.pop();
                    alive = false;
                    break;
                }
            }
            if (alive) {
                stack.push(idx);
            }
        }
    }
    const survivors = new Set<number>(stack);
    const result: number[] = [];
    for (let i = 0; i < n; i++) {
        if (survivors.has(i)) {
            result.push(h[i]);
        }
    }
    return result;
}
