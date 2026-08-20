# Longest Non-Decreasing Chain at Each Index

## Description

You are given an integer array `heights` of length `n`. A **chain** is a
selection of entries, kept in their original order, that never steps down:
apart from the first entry chosen, every entry is at least as large as the
one selected before it. Entries may be skipped freely.

For every index `i`, report the length of the longest chain drawn from
`heights[0..i]` that ends exactly at `heights[i]`.

Return the array of these `n` lengths.

### Example 1

```text
Input: heights = [4,7,4,9]
Output: [1,2,2,3]
Explanation:
- i = 0: the chain [4] has length 1.
- i = 1: [4,7] has length 2.
- i = 2: the second 4 cannot follow 7, but [4,4] works, length 2.
- i = 3: [4,4,9] has length 3; [4,7,9] works too.
```

### Example 2

```text
Input: heights = [6,5,4]
Output: [1,1,1]
Explanation: Every later entry is smaller than everything before it, so no
chain can pair two entries.
```

### Example 3

```text
Input: heights = [5,9,2,3,7]
Output: [1,2,1,2,3]
Explanation: The 2 and the 3 form a fresh start after the tall 9, and the 7
then extends [2,3] to [2,3,7] — while 5 alone only reaches [5,7].
```

### Constraints

- `1 <= n <= 10⁵`
- `1 <= heights[i] <= 10⁷`

## Hints

### Hint 1

For each possible chain length, what is the smallest value a chain of that
length can end on? A table of those minima is all a new entry needs to
consult.

### Hint 2

That table of smallest endings stays sorted, so a binary search tells each
arrival both which entry it improves and how long its best chain is.

### Hint 3

This is the longest non-decreasing subsequence ending at each position — the
tails-array method answers every position in one sweep. Note which bisect
variant treats equal values as extendable rather than replaceable.
