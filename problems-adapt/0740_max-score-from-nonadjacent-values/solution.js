/**
 * @param {number[]} values
 * @return {number}
 */
var maxNonadjacentValueScore = function (values) {
    // Each distinct value has weight v * count[v], so the optimization
    // selects nonconsecutive weighted labels using a two-state recurrence
    // over the sorted distinct values.
    const count = new Map();
    for (const v of values) {
        count.set(v, (count.get(v) || 0) + 1);
    }
    const orderedValues = Array.from(count.keys()).sort((a, b) => a - b);
    let take = 0,
        skip = 0;
    let prev = null;
    for (const value of orderedValues) {
        // Adjacent predecessor conflicts with its take; a gap (missing v-1)
        // makes taking v conflict with nothing, so both states carry in.
        const base = prev !== null && prev === value - 1 ? skip : Math.max(take, skip);
        const newTake = base + value * count.get(value);
        const newSkip = Math.max(take, skip);
        take = newTake;
        skip = newSkip;
        prev = value;
    }
    return Math.max(take, skip);
};
