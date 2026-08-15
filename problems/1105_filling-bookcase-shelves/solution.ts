function minHeightShelves(books: number[][], shelfWidth: number): number {
    const count = books.length;
    const dp = new Array(count + 1).fill(0);
    for (let i = 1; i <= count; i++) {
        let width = 0;
        let height = 0;
        dp[i] = Infinity;
        for (let j = i - 1; j >= 0; j--) {
            const [thickness, bookHeight] = books[j];
            width += thickness;
            if (width > shelfWidth) {
                break;
            }
            height = Math.max(height, bookHeight);
            dp[i] = Math.min(dp[i], dp[j] + height);
        }
    }
    return dp[count];
}
