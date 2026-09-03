# Integers at Popcount Depth K I

## Description

Take a positive integer `x` and apply `popcount` to it again and again,
where `popcount(y)` is how many 1-bits `y` has. Written as a chain:

`x → popcount(x) → popcount(popcount(x)) → …`

the chain always lands on 1 in the end. The **popcount depth** of `x` is
the number of `popcount` steps that take: for `x = 7` (binary `111`) the
chain is 7 → 3 → 2 → 1, so 7 sits at depth 3.

Given integers `n` and `k`, report how many integers in `[1, n]` have a
popcount depth of exactly `k`.

### Example 1

```text
Input: n = 20, k = 1
Output: 4
Explanation: Depth 1 means a single step reaches 1, which happens
exactly for powers of two above 1. Up to 20 those are 2, 4, 8 and 16,
so the answer is 4.
```

### Example 2

```text
Input: n = 100, k = 2
Output: 47
Explanation: A number lands at depth 2 when its own popcount is a
depth-1 value, i.e. a power of two. Within 100 the only reachable
set-bit counts of that shape are 2 and 4, and 47 numbers have one of
those counts.
```

### Example 3

```text
Input: n = 50, k = 4
Output: 0
Explanation: A depth-4 number needs a set-bit count of depth 3, and the
smallest such count is 7 (7 → 3 → 2 → 1). Nothing up to 50 carries 7 or
more set bits, so the answer is 0.
```

### Example 4

```text
Input: n = 10¹⁵, k = 0
Output: 1
Explanation: Only x = 1 starts at the chain's end, so it is the lone
depth-0 integer and the answer is 1 for every n >= 1.
```

### Constraints

- `1 <= n <= 10¹⁵`
- `0 <= k <= 5`

## Hints

### Hint 1

Only a value's own set-bit count drives its depth, and `x ≤ 10¹⁵` has at
most 50 of them. One pass over the 64 possible counts fills a depth
table: the count 1 sits at depth 0, and any larger count `j` sits one
below the depth of `popcount(j)`.

### Hint 2

To count integers up to `n` with exactly `j` set bits, walk `n`'s binary
digits from the top while remembering how many strictly smaller prefixes
carry each running total of ones; whenever `n`'s digit is 1, the prefix
that places a 0 there breaks free to take any suffix.

### Hint 3

Bucket the range by set-bit count, then sum the buckets whose depth entry
equals `k − 1`; handle the two special cases — the all-zero bit string
that the walk invents, and `x = 1`, whose depth is 0 — and add 1 to the
answer when `k = 0`.
