# Longest Equal-Sum Span

## Description

You are given two binary arrays `nums1` and `nums2` of the same length.

A span `[i, j]` is **balanced** when the entries of `nums1` from `i` through
`j` add up to exactly as much as the entries of `nums2` over the same span.
Its length is `j - i + 1`.

Return the length of the longest balanced span, or `0` if none exists.

### Example 1

```text
Input: nums1 = [1,0,1,1,0], nums2 = [0,1,1,0,1]
Output: 5
Explanation: Both arrays hold three 1s in total, so the full span [0,4] is
balanced and no span can be longer.
```

### Example 2

```text
Input: nums1 = [1,1], nums2 = [1,0]
Output: 1
Explanation: Only the single position 0 balances (1 against 1); position 1
gives 1 against 0, and the full span gives 2 against 1.
```

### Example 3

```text
Input: nums1 = [1,1], nums2 = [0,0]
Output: 0
Explanation: Every span, down to single positions, favors nums1, so no
balanced span exists.
```

### Constraints

- `n == nums1.length == nums2.length`
- `1 <= n <= 10⁵`
- every entry of both arrays is `0` or `1`

## Hints

### Hint 1

Sums over a span are differences of prefix sums. Which single quantity,
tracked once per position, decides whether a span balances?

### Hint 2

If that quantity holds the same value at two positions, everything between
them cancels — what does that say about the span they delimit?

### Hint 3

To make such a span as long as possible, which of the repeated positions
should you remember — the first one you saw or the most recent?
