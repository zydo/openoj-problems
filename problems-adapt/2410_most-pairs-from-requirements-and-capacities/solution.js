/**
 * @param {number[]} requirements
 * @param {number[]} capacities
 * @return {number}
 */
var mostRequirementCapacityPairs = function (requirements, capacities) {
    requirements = requirements.slice().sort((a, b) => a - b);
    capacities = capacities.slice().sort((a, b) => a - b);
    // Greedy: pair the weakest unmatched requirement with the weakest
    // unmatched capacity — optimal by an exchange argument.
    let i = 0;
    let j = 0;
    let matches = 0;
    while (i < requirements.length && j < capacities.length) {
        if (requirements[i] <= capacities[j]) {
            matches += 1;
            i += 1;
            j += 1;
        } else {
            // Capacity too weak for the weakest remaining requirement; requirements
            // only get stronger, so it is useless forever — skip it.
            j += 1;
        }
    }
    return matches;
};
