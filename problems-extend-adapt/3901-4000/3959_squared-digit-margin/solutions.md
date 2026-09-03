# Solutions — Squared Digit Margin

## Digit accumulation

Extract each decimal digit by repeatedly taking `n % 10`, adding the raw
digit to `plainSum` and its square to `squaredSum`, then dividing `n` by 10.

The final test is `squaredSum - plainSum >= 50`.

**Complexity:** `O(log n)` time, `O(1)` space.
