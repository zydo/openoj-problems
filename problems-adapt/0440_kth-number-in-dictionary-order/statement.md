# Kth Number in Dictionary Order

## Description

Spell out every whole number from `1` up to `n` and sort the spellings the way
a dictionary sorts words: compare them digit by digit from the left, and when
one spelling is a prefix of another the shorter one comes first. Return the
number that lands at position `k` of that ordering, counting positions from 1.

### Example 1

```text
Input: n = 12, k = 4
Output: 12
Explanation: Sorted as words the numbers read 1, 10, 11, 12, 2, 3, 4, 5, 6, 7,
8, 9. Position 4 holds 12.
```

### Example 2

```text
Input: n = 25, k = 20
Output: 4
Explanation: The ordering opens with 1 and everything starting with a 1 —
1, 10, 11, ..., 19 — then 2, 20, 21, ..., 25, and only then 3 and 4. Counting
those out, position 20 is 4.
```

### Example 3

```text
Input: n = 100, k = 15
Output: 21
Explanation: 100 sits directly behind 10, since the two agree on their first
two digits and 10 is the shorter word. The opening run is 1, 10, 100, 11, 12,
13, 14, 15, 16, 17, 18, 19, 2, 20, 21.
```

### Constraints

- `1 <= n <= 10^9`
- `1 <= k <= n`

## Hints

### Hint 1

`n` can reach a billion, so nothing that materializes or sorts the numbers will
finish. Look instead at how a spelling grows: sticking one more digit on the
end of `p` produces `p0` through `p9`, and every number in range shows up
exactly once as such a growth chain starting from a leading digit `1` to `9`.

### Hint 2

Reading that structure prefix-first — a number, then everything built by
extending it, then the next number at the same level — reproduces dictionary
order exactly. So the answer is the `k`-th thing such a walk touches.

### Hint 3

To leap over a branch you only need its size, not its contents. Everything
extending `p` can be counted a level at a time: `p` itself, then the block
`p0..p9`, then `p00..p99`, each block clipped where it runs past `n`. That is
about ten counts. If the branch is smaller than the steps you still owe, skip
it whole and move to the next prefix; otherwise step into it and pay one.
