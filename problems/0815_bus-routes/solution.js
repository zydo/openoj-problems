/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    if (source === target) {
        return 0;
    }
    const stopToRoutes = new Map();
    for (let r = 0; r < routes.length; r++) {
        for (const s of routes[r]) {
            let list = stopToRoutes.get(s);
            if (!list) {
                list = [];
                stopToRoutes.set(s, list);
            }
            list.push(r);
        }
    }
    if (!stopToRoutes.has(source) || !stopToRoutes.has(target)) {
        return -1;
    }
    const usedRoutes = new Set();
    const seenStops = new Set([source]);
    const queue = [[source, 0]];
    let head = 0;
    while (head < queue.length) {
        const [stop, buses] = queue[head];
        head++;
        const list = stopToRoutes.get(stop) || [];
        for (const r of list) {
            if (usedRoutes.has(r)) {
                continue;
            }
            usedRoutes.add(r);
            for (const nxt of routes[r]) {
                if (nxt === target) {
                    return buses + 1;
                }
                if (!seenStops.has(nxt)) {
                    seenStops.add(nxt);
                    queue.push([nxt, buses + 1]);
                }
            }
        }
    }
    return -1;
};
