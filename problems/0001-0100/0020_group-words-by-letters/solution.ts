function groupByLetters(words: string[]): string[][] {
    const groups = new Map<string, string[]>();
    for (const word of words) {
        // Sorting canonicalizes the character multiset: rearrangements produce
        // byte-identical keys and unrelated words can never collide on one.
        const key = word.split("").sort().join("");
        // Every word lands in exactly one bucket, alongside precisely its
        // rearrangements; a first-seen key opens the bucket.
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key)!.push(word);
    }
    // The buckets are the required groups.
    return Array.from(groups.values());
}
