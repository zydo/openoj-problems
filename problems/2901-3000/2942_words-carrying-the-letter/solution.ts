// A word qualifies exactly when x occurs in it; indexOf answers that in
// one call (-1 means absent), so a single pass over words collects the
// matching indices in order.
function wordsWithLetter(words: string[], x: string): number[] {
    const result: number[] = [];
    for (let i = 0; i < words.length; ++i) {
        if (words[i].indexOf(x) !== -1) result.push(i);
    }
    return result;
}
