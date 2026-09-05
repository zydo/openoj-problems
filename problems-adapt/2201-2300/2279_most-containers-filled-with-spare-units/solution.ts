function mostFilledContainers(capacity: number[], contents: number[], spare: number): number {
    const needs = capacity.map((c, i) => c - contents[i]).sort((a, b) => a - b);
    let remaining = spare;
    let full = 0;
    for (const need of needs) {
        if (need > remaining) {
            break;
        }
        remaining -= need;
        full++;
    }
    return full;
}
