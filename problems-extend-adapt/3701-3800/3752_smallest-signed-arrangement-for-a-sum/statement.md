# Smallest Signed Arrangement For A Sum

## Description

You are given a positive integer `n` and an integer `target`. Build an
array of `n` integers in which the absolute values are the numbers
`1, 2, ..., n` — each used exactly once, each with a sign you choose
freely — and whose elements sum to `target`.

Among all arrays satisfying both requirements, return the one that is
lexicographically smallest. If no array can meet them, return an empty
array.

One array `a` is lexicographically smaller than another `b` of the same
length when, at the first position where the two differ, `a`'s element is
strictly less than `b`'s. Because comparing here happens on signed
values, `-1` counts as smaller than `1`, so a smaller leading element is
often a negative one.

### Example 1

```text
Input: n = 4, target = 0
Output: [-4,-1,2,3]
Explanation: The values 1 through 4 must each carry one sign, and the
total must vanish. Putting minus signs on 4 and 1 gives
-4 - 1 + 2 + 3 = 0, and no valid array can start with anything smaller
than -4.
```

### Example 2

```text
Input: n = 5, target = 3
Output: [-5,-1,2,3,4]
Explanation: The all-positive arrangement sums to 15. Negating 5 drops
the total by 10 and negating 1 drops it by 2 more, landing exactly on 3,
and front-loading both negatives in decreasing order yields the
lexicographically smallest result.
```

### Example 3

```text
Input: n = 2, target = -2
Output: []
Explanation: The possible sums use absolute values {1, 2}: the
arrangements [1,-2], [-1,2], [1,2], [-1,-2] reach -1, 1, 3 and -3 only.
-2 is out of reach either because of range or parity, so the answer is
the empty array.
```

### Constraints

- `1 <= n <= 10⁵`
- `-10¹⁰ <= target <= 10¹⁰`

## Hints

### Hint 1

The all-positive arrangement `[1, 2, ..., n]` sums to
`S = n * (n + 1) / 2`, and no signed arrangement can leave the interval
`[-S, S]`.

### Hint 2

Flipping the sign of `x` changes the total by `-2 * x`, so every
reachable sum has the parity of `S`. A target outside the interval or of
the wrong parity makes the empty array the only answer.

### Hint 3

With `D = (S - target) / 2`, the values you negate must be a subset of
`{1, ..., n}` summing to exactly `D` — and conversely any such subset
lands the total on `target`.

### Hint 4

For the lexicographically smallest order, spend the deficit on the
largest values first: sweep `x` from `n` down to `1`, negating `x` when
it still fits under the remaining deficit.

### Hint 5

Output the negated values in decreasing order (the most negative leads)
followed by the surviving positives in increasing order — that
arrangement is the smallest one any fixed sign choice allows.
