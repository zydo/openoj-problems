function finalTally(tokens: string[]): number {
    let value = 0;
    for (const operation of tokens) {
        value += operation[1] === "+" ? 1 : -1;
    }
    return value;
}
