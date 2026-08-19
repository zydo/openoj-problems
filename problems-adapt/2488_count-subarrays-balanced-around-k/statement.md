# Count Subarrays Balanced Around K

## Description

You are given `nums`, an array of the `n` distinct integers `1` through `n` in
some order, and a target value `k`.

Sort a window's contents ascending and take the middle entry; for an
even-length window take the entry just left of the middle. That entry is the
window's median.

Count the non-empty contiguous windows of `nums` whose median equals `k`.

### Example 1

```text
Input: nums = [2,4,5,1,3], k = 4
Output: 4
Explanation: Four windows have median 4: [4] alone, [4,5] (sorted [4,5], the
left-middle entry is 4), [2,4,5] (sorted [2,4,5], middle is 4), and [4,5,1]
(sorted, 4 lands in the middle).
```

### Example 2

```text
Input: nums = [1,2,5,3,4], k = 5
Output: 1
Explanation: Every window that stretches past the 5 pulls in a value smaller
than it on each side, and the 5 slides off the median. Only [5] itself
qualifies.
```

### Example 3

```text
Input: nums = [3,1,2], k = 1
Output: 3
Explanation: The qualifying windows are [1], [3,1] and [1,2] — pairing the 1
with either of its larger neighbours leaves it at the left-middle position.
The whole array sorted is [1,2,3], whose middle is 2, so it does not count.
```

### Constraints

- `n == nums.length`
- `1 <= n <= 10⁵`
- `1 <= nums[i], k <= n`
- All entries of `nums` are distinct.

## Hints

### Hint 1

Only each value's relation to `k` matters. Map every element to `+1` when it
exceeds `k`, `-1` when it falls below, and `0` for `k` itself.

### Hint 2

In that encoding, what does a median-`k` window look like? It must contain the
`0`, and its sum must come out as exactly `0` (odd length) or `1` (even
length, where the left-middle rule forgives one extra larger element).

### Hint 3

Scan once with a running encoded sum. Store the prefix sums seen strictly
before `k`'s position in a hash map; at each index from `k`'s position onward,
count the stored prefixes equal to the current sum and to the current sum
minus one.
