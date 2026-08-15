function xorQueries(arr: number[], queries: number[][]): number[] {
    const prefix: number[] = [0];
    for (const x of arr) {
        prefix.push(prefix[prefix.length - 1] ^ x);
    }
    return queries.map(([l, r]) => prefix[r + 1] ^ prefix[l]);
}
