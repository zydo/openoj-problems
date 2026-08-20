function fewestTransitLines(lines: number[][], startStop: number, endStop: number): number {
    // Early exits: same stop needs no line; an endpoint on no route
    // has no path.
    if (startStop === endStop) {
        return 0;
    }
    // Map each stop to the lines passing through it.
    const stopToRoutes = new Map<number, number[]>();
    for (let r = 0; r < lines.length; r++) {
        for (const s of lines[r]) {
            let list = stopToRoutes.get(s);
            if (!list) {
                list = [];
                stopToRoutes.set(s, list);
            }
            list.push(r);
        }
    }
    if (!stopToRoutes.has(startStop) || !stopToRoutes.has(endStop)) {
        return -1;
    }
    const usedRoutes = new Set<number>();
    const seenStops = new Set<number>([startStop]);
    const queue: Array<[number, number]> = [[startStop, 0]];
    let head = 0;
    while (head < queue.length) {
        const [stop, rides] = queue[head];
        head++;
        const list = stopToRoutes.get(stop) || [];
        for (const r of list) {
            // BFS over stops: boarding a route reaches all its
            // stops one level deeper. Expand each route only once
            // ever — re-boarding can only revisit stops already
            // found at an equal or smaller ride count.
            if (usedRoutes.has(r)) {
                continue;
            }
            usedRoutes.add(r);
            for (const nxt of lines[r]) {
                // The endStop is counted on sight — no need to
                // enqueue it.
                if (nxt === endStop) {
                    return rides + 1;
                }
                if (!seenStops.has(nxt)) {
                    seenStops.add(nxt);
                    queue.push([nxt, rides + 1]);
                }
            }
        }
    }
    return -1;
}
