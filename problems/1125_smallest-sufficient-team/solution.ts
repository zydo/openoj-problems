function smallestSufficientTeam(
    req_skills: string[],
    people: string[][],
): number[] {
    const skillIndex = new Map<string, number>();
    for (let i = 0; i < req_skills.length; i++)
        skillIndex.set(req_skills[i], i);

    const np = people.length;
    const masks: number[] = new Array(np).fill(0);
    for (let i = 0; i < np; i++) {
        for (const skill of people[i]) masks[i] |= 1 << skillIndex.get(skill)!;
    }

    const full = (1 << req_skills.length) - 1;

    // Map preserves insertion order (set on an existing key keeps its position).
    const dp = new Map<number, number[]>();
    dp.set(0, []);

    for (let i = 0; i < np; i++) {
        const snapshot = Array.from(dp.entries());
        const newEntries = new Map<number, number[]>();
        for (const [state, team] of snapshot) {
            const newState = state | masks[i];
            const candidate = team.concat([i]);
            const cur = dp.get(newState);
            if (cur === undefined || cur.length > candidate.length) {
                const pending = newEntries.get(newState);
                if (
                    pending === undefined ||
                    pending.length > candidate.length
                ) {
                    newEntries.set(newState, candidate);
                }
            }
        }
        for (const [k, v] of newEntries) dp.set(k, v);
    }

    const res = dp.get(full)!.slice();
    res.sort((a, b) => a - b);
    return res;
}
