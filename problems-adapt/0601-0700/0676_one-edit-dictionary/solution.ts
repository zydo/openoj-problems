// Words grouped by length; each loadWords REPLACES the previous dictionary,
// so matchesOneEdit only ever sees the latest call's words. A candidate matches when
// it differs from the matchesOneEdit word in exactly one position.
class OneEditDictionary {
    private buckets = new Map<number, string[]>();

    constructor() {}

    loadWords(dictionary: string[]): void {
        const buckets = new Map<number, string[]>();
        for (const word of dictionary) {
            const length = word.length;
            const bucket = buckets.get(length);
            if (bucket === undefined) {
                buckets.set(length, [word]);
            } else {
                bucket.push(word);
            }
        }
        this.buckets = buckets;
    }

    matchesOneEdit(searchWord: string): boolean {
        const candidates = this.buckets.get(searchWord.length) ?? [];
        for (const word of candidates) {
            let mismatches = 0;
            for (let index = 0; index < word.length; ++index) {
                if (word[index] !== searchWord[index]) {
                    ++mismatches;
                    if (mismatches > 1) {
                        break;
                    }
                }
            }
            if (mismatches === 1) {
                return true;
            }
        }
        return false;
    }
}
