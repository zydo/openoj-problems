/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
    const have = new Set(supplies);
    const index = new Map();
    for (let i = 0; i < recipes.length; i++) {
        index.set(recipes[i], i);
    }
    const n = recipes.length;
    const dependents = Array.from({ length: n }, () => []);
    const indegree = new Array(n).fill(0);
    const impossible = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        const seen = new Set();
        for (const item of ingredients[i]) {
            if (have.has(item)) {
                continue;
            }
            const j = index.get(item);
            if (j === undefined) {
                impossible[i] = true;
            } else if (!seen.has(j)) {
                seen.add(j);
                indegree[i]++;
                dependents[j].push(i);
            }
        }
    }

    const queue = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0 && !impossible[i]) {
            queue.push(i);
        }
    }
    const made = [];
    for (let head = 0; head < queue.length; head++) {
        const i = queue[head];
        made.push(recipes[i]);
        for (const j of dependents[i]) {
            if (impossible[j]) {
                continue;
            }
            indegree[j]--;
            if (indegree[j] === 0) {
                queue.push(j);
            }
        }
    }
    return made.sort();
};
