// One fixed-stride walk: every hand starts at a multiple of `size` and
// spans to the next boundary or the end of the array, whichever comes
// first — slice() hands over each window already copied, so the output
// never aliases the input. The stride loop terminates on arr.length, an
// empty input producing zero hands for free.
function deal(arr, size) {
    const hands = [];
    for (let start = 0; start < arr.length; start += size) {
        hands.push(arr.slice(start, start + size));
    }
    return hands;
}

class Solution {
    run(dealProbe) {
        dealProbe.drive(deal);
    }
}
