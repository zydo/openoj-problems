function areSentencesSimilarTwo(
    sentence1: string[],
    sentence2: string[],
    similarPairs: string[][],
): boolean {
    if (sentence1.length !== sentence2.length) return false;

    const parent = new Map<string, string>();
    const find = (x: string): string => {
        if (!parent.has(x)) parent.set(x, x);
        while (parent.get(x) !== x) {
            parent.set(x, parent.get(parent.get(x))!);
            x = parent.get(x)!;
        }
        return x;
    };
    const union = (a: string, b: string): void => {
        const ra = find(a),
            rb = find(b);
        if (ra !== rb) parent.set(ra, rb);
    };

    for (const [a, b] of similarPairs) {
        union(a, b);
    }

    for (let i = 0; i < sentence1.length; i++) {
        const a = sentence1[i],
            b = sentence2[i];
        if (a !== b && find(a) !== find(b)) return false;
    }
    return true;
}
