# Ribbon Rationing

## Description

You are given an integer array `ribbons`, where `ribbons[i]` is the
length of the `i`th ribbon, and an integer `k`. Each ribbon may be
left whole or cut into any number of pieces whose lengths are positive
integers; whatever is left over after cutting is thrown away.

Return the largest piece length `x` that lets you end up holding at
least `k` pieces, all exactly `x` long. If no positive length can
produce `k` pieces, return `0`.

### Example 1

```text
Input: ribbons = [10,8,6], k = 3
Output: 6
Explanation: Cutting at 6 takes one piece from each ribbon — the first
gives 6 plus a scrap of 4, the second gives 6 plus a scrap of 2, and
the third is already 6 — reaching exactly 3 pieces of length 6. At
length 7 only 2 pieces are possible.
```

### Example 2

```text
Input: ribbons = [11,15,9], k = 5
Output: 5
Explanation: At length 5 the ribbons yield 2 + 3 + 1 = 6 pieces, which
meets the quota. At length 6 the count falls to 1 + 2 + 1 = 4.
```

### Example 3

```text
Input: ribbons = [4], k = 5
Output: 0
Explanation: Even unit-length pieces give only 4, short of 5, so no
positive length works.
```

### Constraints

- `1 <= ribbons.length <= 10⁵`
- `1 <= ribbons[i] <= 10⁵`
- `1 <= k <= 10⁹`

## Hints

### Hint 1

A length either produces enough pieces or it does not, and if a
length falls short then every longer length does too — the answer can
be binary-searched.

### Hint 2

A ribbon of length `r` yields `floor(r / x)` pieces at candidate
length `x`, so feasibility is just a sum of those floors against `k`.
