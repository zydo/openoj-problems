# Pour Until the Levels Match

## Description

You are handed `n` buckets, where bucket `i` currently holds `buckets[i]`
gallons. Water may be moved from any bucket to any other bucket, in any
amount — fractional pours are fine — but moving liquid is not free: each
time `k` gallons leave a bucket, `loss` percent of `k` splashes away
en route, and only what remains ever arrives.

You want every bucket to finish with the same amount of water. Find the
largest common level that can be reached this way and return it. Answers
within `10^-5` of the true value are accepted.

### Example 1

```text
Input: buckets = [1,4], loss = 75
Output: 1.60000
Explanation: Each poured gallon keeps only a quarter of itself. Lifting
the first bucket from 1 up to 1.6 takes 0.6 gallons delivered, and the
second bucket can spare 4 - 1.6 = 2.4, a quarter of which is exactly 0.6.
Demanding more is hopeless: every extra delivered gallon would cost 4
poured gallons, and the second bucket has less and less to give.
```

### Example 2

```text
Input: buckets = [4,11], loss = 60
Output: 6.00000
Explanation: Now 40% of each pour survives. Raising the first bucket from
4 to 6 needs 2 gallons to land, while the second bucket releases 5 — and
40% of 5 is exactly 2. Level 6 is the best achievable compromise.
```

### Example 3

```text
Input: buckets = [7,7,7], loss = 90
Output: 7.00000
Explanation: The buckets already agree, so nothing needs to be poured —
and nothing gets spilled.
```

### Constraints

- `1 <= buckets.length <= 10^5`
- `0 <= buckets[i] <= 10^5`
- `0 <= loss <= 99`

## Hints

### Hint 1

Imagine committing to a final level `x` up front. Deciding whether that
commitment can be honored is simple bookkeeping.

### Hint 2

Every bucket below `x` must gain `x - buckets[i]` gallons, and every
bucket above `x` can give up `buckets[i] - x` gallons. A given-up gallon
arrives shrunk to `(100 - loss)` percent of itself, so `x` is reachable
precisely when the shrunk surplus covers the total deficit.

### Hint 3

If some level is reachable, every lower level is too, so feasibility is
monotone in `x`. Binary-search `x` between `0` and the largest starting
amount, iterating enough times to land well inside the `10^-5` tolerance.
