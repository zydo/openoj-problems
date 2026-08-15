function minDamage(power: number, damage: number[], health: number[]): number {
    const n = damage.length;
    const ratio: number[] = [];
    for (let i = 0; i < n; i++) {
        const t = Math.ceil(health[i] / power);
        ratio.push(damage[i] / t);
    }
    const order: number[] = [];
    for (let i = 0; i < n; i++) order.push(i);
    const merged = order.map((v, i) => [ratio[i], v] as [number, number]);
    merged.sort((a, b) => b[0] - a[0]);
    let remaining = damage.reduce((a, b) => a + b, 0);
    let answer = 0;
    for (const [, i] of merged) {
        const t = Math.ceil(health[i] / power);
        answer += remaining * t;
        remaining -= damage[i];
    }
    return answer;
}
