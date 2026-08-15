function closestRoom(rooms: number[][], queries: number[][]): number[] {
    const roomsBySize = rooms
        .map((_, i) => i)
        .sort((a, b) => rooms[b][1] - rooms[a][1]);
    const queryOrder = queries
        .map((_, j) => j)
        .sort((a, b) => queries[b][1] - queries[a][1]);
    const lowerBound = (arr: number[], target: number): number => {
        let lo = 0,
            hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };
    const ids: number[] = [];
    const answers: number[] = new Array(queries.length);
    let ri = 0;
    for (const j of queryOrder) {
        const preferred = queries[j][0];
        const minSize = queries[j][1];
        while (
            ri < roomsBySize.length &&
            rooms[roomsBySize[ri]][1] >= minSize
        ) {
            const id = rooms[roomsBySize[ri]][0];
            const pos = lowerBound(ids, id);
            ids.splice(pos, 0, id);
            ri += 1;
        }
        const pos = lowerBound(ids, preferred);
        let best = -1;
        let bestDist = Infinity;
        if (pos > 0) {
            best = ids[pos - 1];
            bestDist = preferred - ids[pos - 1];
        }
        if (pos < ids.length && ids[pos] - preferred < bestDist) {
            best = ids[pos];
        }
        answers[j] = best;
    }
    return answers;
}
