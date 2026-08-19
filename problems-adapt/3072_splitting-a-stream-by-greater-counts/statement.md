# Splitting a Stream by Greater Counts

## Description

You are given an integer array `nums` of length `n`, arriving as a stream.

Write `above(arr, v)` for the number of elements of `arr` strictly greater
than `v`. The stream is dealt into two lists, `first` and `second`, in `n`
steps:

- Step 1 sends `nums[0]` to `first`; step 2 sends `nums[1]` to `second`.
- Each later step `i` compares `above(first, nums[i])` against
  `above(second, nums[i])`:
  - the larger count receives `nums[i]`;
  - on a tie, the shorter list receives it;
  - if the lists also tie in length, `first` receives it.

Return the concatenation of `first` and `second`, in that order.

### Example 1

```text
Input: nums = [4,7,6,2]
Output: [4,7,6,2]
Explanation: first = [4], second = [7] after the forced opening. The 6 sees
above(first, 6) = 0 and above(second, 6) = 1, so second takes it. The 2 then
sees counts 1 and 2, and second takes it again. first stayed at one element:
the answer is first + second = [4] + [7,6,2].
```

### Example 2

```text
Input: nums = [9,2,4,7]
Output: [9,4,7,2]
Explanation: The opening leaves first = [9], second = [2]. The 4 sees counts
1 vs 0 — first takes it — and the 7 likewise sees 1 vs 0 and joins first.
Everything after the opening lands in first: [9,4,7] followed by [2].
```

### Example 3

```text
Input: nums = [5,5,4,4]
Output: [5,4,5,4]
Explanation: first = [5], second = [5]. The first 4 sees equal counts (1 vs 1)
and equal lengths, so first takes it. The second 4 still sees equal counts,
but first is now longer, so second takes it — the lists end balanced.
```

### Constraints

- `3 <= n <= 10^5`
- `1 <= nums[i] <= 10^9`

## Hints

### Hint 1

Every step asks the same question about both lists — how many stored elements
exceed the incoming value — and elements are only ever appended. Rank query
plus insertion is the shape to reach for.

### Hint 2

Compress the distinct values to ranks `1..m` and give each list its own
Fenwick tree of occurrence counts. Then `above(arr, v)` is
`len(arr) - (prefix count at rank(v))`.

### Hint 3

Simulate the deal directly: strictly larger count wins, then the shorter list,
then `first`. Each append is one Fenwick update, and duplicates are already
handled because the prefix counts are "at most" sums.
