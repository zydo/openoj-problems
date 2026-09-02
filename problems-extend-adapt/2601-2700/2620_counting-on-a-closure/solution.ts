function makeCounter(n: number): () => number {
    // The closure owns one mutable count slot: seeded with n when
    // makeCounter runs, read by the first call, and advanced before the
    // value escapes — so every later call sees exactly the previous
    // return plus one, with no shared or reset state anywhere.
    let count = n;
    return () => count++;
}

class Solution {
    run(counterProbe: CounterProbe): void {
        counterProbe.drive(makeCounter);
    }
}
