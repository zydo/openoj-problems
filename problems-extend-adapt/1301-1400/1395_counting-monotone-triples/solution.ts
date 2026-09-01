function countMonotoneTriples(rating: number[]): number {
    // Fix the middle index j: a rising triple picks any smaller rating on
    // the left and any larger on the right; a falling triple mirrors it.
    // Summing the four counts over every j counts each triple exactly
    // once, by its middle element.
    const n = rating.length;
    let triples = 0;
    for (let j = 0; j < n; ++j) {
        let lessLeft = 0;
        for (let i = 0; i < j; ++i) {
            if (rating[i] < rating[j]) {
                ++lessLeft;
            }
        }
        const greaterLeft = j - lessLeft;
        let greaterRight = 0;
        for (let k = j + 1; k < n; ++k) {
            if (rating[k] > rating[j]) {
                ++greaterRight;
            }
        }
        const lessRight = n - 1 - j - greaterRight;
        triples += lessLeft * greaterRight + greaterLeft * lessRight;
    }
    return triples;
}
