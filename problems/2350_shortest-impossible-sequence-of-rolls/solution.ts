function shortestSequence(rolls: number[], k: number): number {
    const seen = new Set<number>();
    let answer = 1;
    for (const r of rolls) {
        seen.add(r);
        if (seen.size === k) {
            answer += 1;
            seen.clear();
        }
    }
    return answer;
}
