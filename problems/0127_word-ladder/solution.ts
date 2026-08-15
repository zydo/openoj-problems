function ladderLength(
    beginWord: string,
    endWord: string,
    wordList: string[],
): number {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    const length = beginWord.length;
    const patternOf = (word: string, i: number): string =>
        word.slice(0, i) + "*" + word.slice(i + 1);

    const buckets = new Map<string, string[]>();
    for (const word of wordList) {
        for (let i = 0; i < length; ++i) {
            const pattern = patternOf(word, i);
            const bucket = buckets.get(pattern);
            if (bucket === undefined) buckets.set(pattern, [word]);
            else bucket.push(word);
        }
    }

    const visited = new Set<string>([beginWord]);
    let queue: string[] = [beginWord];
    let steps = 1;
    while (queue.length > 0) {
        const next: string[] = [];
        for (const word of queue) {
            if (word === endWord) return steps;
            for (let i = 0; i < length; ++i) {
                const pattern = patternOf(word, i);
                const bucket = buckets.get(pattern);
                if (bucket === undefined) continue;
                buckets.delete(pattern);
                for (const neighbor of bucket) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        next.push(neighbor);
                    }
                }
            }
        }
        queue = next;
        ++steps;
    }
    return 0;
}
