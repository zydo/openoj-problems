function longestDecomposition(text: string): number {
    const n = text.length;
    let count = 0;
    let left = 0;
    let right = n;
    while (left < right) {
        let size = 1;
        let matched = false;
        while (left + size <= right - size) {
            if (
                text.slice(left, left + size) ===
                text.slice(right - size, right)
            ) {
                count += 2;
                left += size;
                right -= size;
                matched = true;
                break;
            }
            size += 1;
        }
        if (!matched) {
            count += 1;
            break;
        }
    }
    return count;
}
