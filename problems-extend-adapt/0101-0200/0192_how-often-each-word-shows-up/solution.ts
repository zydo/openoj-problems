function countEachWord(content: string): string[] {
    // One counter per distinct word; the split drops leading/trailing
    // separators and never yields an empty word.
    const counts = new Map<string, number>();
    for (const word of content.split(/\s+/)) {
        if (word === "") continue;
        counts.set(word, (counts.get(word) || 0) + 1);
    }
    // Descending frequency, lexicographic word as the tiebreaker.
    const ranked = [...counts.entries()].sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1));
    return ranked.map(([word, count]) => `${word} ${count}`);
}
