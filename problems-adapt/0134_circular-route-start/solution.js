/**
 * @param {number[]} supply
 * @param {number[]} cost
 * @return {number}
 */
var circularRouteStart = function (supply, cost) {
    let total = 0;
    let tank = 0;
    let start = 0;
    for (let i = 0; i < supply.length; i++) {
        const diff = supply[i] - cost[i];
        // total witnesses whether the whole circuit is feasible at all.
        total += diff;
        // tank is the running surplus measured from the candidate start.
        tank += diff;
        if (tank < 0) {
            // Restarting anywhere in [start, i] forfeits a non-negative
            // surplus, so an intermediate start reaches i with even less
            // fuel: the whole stretch is disqualified in one stroke.
            start = i + 1;
            tank = 0;
        }
    }
    // total >= 0 certifies the final candidate can finish the circuit.
    return total >= 0 ? start : -1;
};
