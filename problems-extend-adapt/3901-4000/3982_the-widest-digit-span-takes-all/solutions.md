# Solutions — The Widest Digit Span Takes All

## Digit extremes

Scan each value's decimal digits while tracking the minimum and maximum
digit. Record its span and keep the largest span seen.

After the scan, add every value whose span equals that maximum.

**Complexity:** `O(n log max(nums))` time, `O(1)` space.
