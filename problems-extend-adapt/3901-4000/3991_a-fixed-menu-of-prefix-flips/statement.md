# A Fixed Menu Of Prefix Flips

## Description

You are given an array `nums` of length `n` holding each integer from `0` to
`n - 1` exactly once — a scrambled permutation.

You are also given an array `lengths` of distinct allowed flip sizes.

One operation picks any size `x` from `lengths` and reverses the first `x`
elements of `nums`. For instance, flipping the first `3` entries of
`[4, 1, 2, 3]` turns it into `[2, 1, 4, 3]`.

How few operations are needed to arrange `nums` in ascending order? Answer
with that minimum, or `-1` when no sequence of allowed flips can do it.

### Example 1

```text
Input: nums = [1,0], lengths = [2]
Output: 1
Explanation: Flipping the first 2 elements swaps the pair, leaving the
sorted [0, 1]. One operation settles it.
```

### Example 2

```text
Input: nums = [0,2,1], lengths = [2,3]
Output: 3
Explanation:
    Flip the first 3 elements: nums = [1,2,0].
    Flip the first 2 elements: nums = [2,1,0].
    Flip the first 3 elements: nums = [0,1,2].

    No shorter route exists, so the minimum is 3.
```

### Example 3

```text
Input: nums = [1,2,0], lengths = [2]
Output: -1
Explanation: With size 2 as the only allowed flip, the array only ever
alternates between [1,2,0] and [2,1,0] — the trailing 0 can never move. The
sort is impossible, so the answer is -1.
```

### Example 4

```text
Input: nums = [0,1,2], lengths = [1,3]
Output: 0
Explanation: The array already reads in ascending order, so no flips are
needed at all.
```

### Constraints

- `1 <= n == nums.length <= 8`
- `0 <= nums[i] <= n - 1`
- `nums` holds every integer from `0` to `n - 1` exactly once
- `1 <= lengths.length <= n`
- `1 <= lengths[i] <= n`
- the values in `lengths` are distinct

## Hints

### Hint 1

With `n <= 8` there are at most `8!` different arrangements in play.

### Hint 2

Picture every arrangement as a node; one allowed flip of the first `x`
entries is an edge to another node.

### Hint 3

Every edge costs the same, so a breadth-first search from the input finds
distances in increasing order.

### Hint 4

The first time the search lands on the sorted arrangement, the distance so
far is the fewest possible number of flips.

### Hint 5

Should the search run out of nodes without ever reaching the sorted
arrangement, no sequence works and the answer is `-1`.
