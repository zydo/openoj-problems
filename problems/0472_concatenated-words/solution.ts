function findAllConcatenatedWordsInADict(words: string[]): string[] {
    const dictionary = new Set<string>(words);

    const isConcatenated = (word: string): boolean => {
        const n = word.length;
        const dp: boolean[] = new Array(n + 1).fill(false);
        dp[0] = true;
        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                if (j === 0 && i === n) {
                    continue; // the word itself does not count as a part
                }
                if (dp[j] && dictionary.has(word.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[n];
    };

    const result: string[] = [];
    for (const word of words) {
        if (isConcatenated(word)) {
            result.push(word);
        }
    }
    return result;
}
