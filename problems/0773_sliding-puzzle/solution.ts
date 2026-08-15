function slidingPuzzle(board: number[][]): number {
    const target = "123450";
    const neighbors = [
        [1, 3],
        [0, 2, 4],
        [1, 5],
        [0, 4],
        [3, 5, 1],
        [2, 4],
    ];
    const start = board[0].concat(board[1]).join("");
    if (start === target) return 0;
    const visited = new Set<string>([start]);
    const queue: [string, number][] = [[start, 0]];
    while (queue.length > 0) {
        const [state, moves] = queue.shift()!;
        const zero = state.indexOf("0");
        for (const nxt of neighbors[zero]) {
            const chars = state.split("");
            const tmp = chars[zero];
            chars[zero] = chars[nxt];
            chars[nxt] = tmp;
            const newState = chars.join("");
            if (newState === target) return moves + 1;
            if (!visited.has(newState)) {
                visited.add(newState);
                queue.push([newState, moves + 1]);
            }
        }
    }
    return -1;
}
