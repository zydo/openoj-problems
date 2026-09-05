# Cheapest Log Haul

## Description

You are given the integers `n`, `m`, and `k`.

Two logs of lengths `n` and `m` must travel on three trucks, and each
truck carries a single piece of length `k` or less.

A log may be split in two: cutting a piece of length `x` into lengths
`len1` and `len2`, where `len1 + len2 = x`, costs `len1 * len2`. Every
resulting piece occupies its own truck.

Return the least total cutting cost that gets everything loaded — and 0
when the logs can ride without any cut.

### Example 1

```text
Input: n = 9, m = 4, k = 7
Output: 14
Explanation:
The length-9 log exceeds the truck cap 7, so it must be split; the cheapest
legal cut takes a 7-unit piece and leaves 2, costing 7 * 2 == 14. After
that, the pieces 7 and 2 plus the untouched length-4 log fill one truck
each.
```

### Example 2

```text
Input: n = 3, m = 12, k = 8
Output: 32
Explanation:
Only the length-12 log is too long. With pieces of 8 and 4 the cut costs
8 * 4 == 32, and the three pieces 8, 4, and 3 fit the three trucks.
```

### Example 3

```text
Input: n = 5, m = 5, k = 5
Output: 0
Explanation:
Both logs already fit within the cap of 5, so each takes a truck and no
cut is ever paid for.
```

### Constraints

- `2 <= k <= 10⁵`
- `1 <= n, m <= 2 * k`
- Every input guarantees the logs can be transported.

## Hints

### Hint 1

A log that already fits never justifies a cut — any split costs a
positive amount.

### Hint 2

Because each log is at most `2 * k`, at most one of the two can exceed
the cap; the other simply rides along.

### Hint 3

A too-long log `L` splits into `a` and `L - a` where both pieces fit, so
`a` lies in `[L - k, k]`; the product `a * (L - a)` is smallest at an
endpoint of that range, which costs `k * (L - k)`.
