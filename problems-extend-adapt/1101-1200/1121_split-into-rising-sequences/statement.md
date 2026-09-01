# Split Into Rising Sequences

## Description

You are given an integer array `nums` arranged in **non-decreasing** order,
together with an integer `k`. Decide whether `nums` can be dealt into one
or more disjoint **strictly increasing** subsequences, every one of them at
least `k` elements long. Return `true` when such a dealing exists and
`false` otherwise.

The subsequences may interleave freely — only their membership must be
disjoint, and each keeps the relative order it has in `nums`.

### Example 1

```text
Input: nums = [3,3,3,4,5,6], k = 2
Output: true
```

Deal the three copies of `3` into three sequences and hang `4`, `5`, and
`6` off them: `[3,5]`, `[3,6]`, `[3,4]` — all strictly rising and all of
length `2`.

### Example 2

```text
Input: nums = [2,2,2,2,3,4], k = 3
Output: false
```

Four copies of `2` can never share a strictly increasing sequence, so at
least four sequences would be needed — and six elements cannot stretch
that far with every sequence reaching length `3`.

### Example 3

```text
Input: nums = [9,9,9], k = 1
Output: true
```

Singleton sequences are legal when `k` is `1`.

### Constraints

- `1 <= k <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `nums` is sorted in non-decreasing order.

## Hints

### Hint 1

A strictly increasing sequence swallows any value at most once — so
duplicates are what decide how many sequences the split needs.

### Hint 2

The most frequent value demands one dedicated sequence per copy; call
that count `m`. Dealing the sorted array round-robin over exactly `m`
sequences never puts equal values together and keeps lengths within one
of each other, so the shortest reaches `floor(n / m)`.

### Hint 3

The split exists precisely when `n >= m * k` — count the longest run of
equal values and compare.
