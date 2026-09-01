/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var canLeadAfterBonus = function (candies, extraCandies) {
    const maximum = Math.max(...candies);
    return candies.map((count) => count + extraCandies >= maximum);
};
