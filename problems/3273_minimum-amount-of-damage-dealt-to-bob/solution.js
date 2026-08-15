/**
 * @param {number} power
 * @param {number[]} damage
 * @param {number[]} health
 * @return {number}
 */
var minDamage = function (power, damage, health) {
    const n = damage.length;
    const order = [];
    for (let i = 0; i < n; i++) order.push(i);
    // stable sort by damage[i]/ceil(health[i]/power) descending
    const ratio = [];
    for (let i = 0; i < n; i++) {
        const t = Math.ceil(health[i] / power);
        ratio.push(damage[i] / t);
    }
    const merged = order.map((v, i) => [ratio[i], v]);
    merged.sort((a, b) => b[0] - a[0]);
    let remaining = damage.reduce((a, b) => a + b, 0);
    let answer = 0;
    for (const [, i] of merged) {
        const t = Math.ceil(health[i] / power);
        answer += remaining * t;
        remaining -= damage[i];
    }
    return answer;
};
