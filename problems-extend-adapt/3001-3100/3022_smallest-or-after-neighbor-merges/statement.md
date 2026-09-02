# Smallest OR After Neighbor Merges

## Description

You are given a 0-indexed integer array `nums` and an integer `k`.

A single operation merges one neighboring pair: choose an index `i` with
`0 <= i < nums.length - 1`, delete `nums[i]` and `nums[i + 1]` from the
array, and put the single value `nums[i] & nums[i + 1]` in their place,
where `&` is the bitwise AND. The array shrinks by one element each time.

Carry out at most `k` such operations and return the smallest value the
bitwise OR of the surviving elements can reach.

### Example 1

```text
Input: nums = [12,10,9], k = 1
Output: 9
Explanation: Merge the first pair: 12 & 10 = 8, leaving [8,9] whose
bitwise OR is 9. Checking the only other choice, merging 10 and 9 gives 8
and leaves [12,8] with OR 12, so 9 is the minimum.
```

### Example 2

```text
Input: nums = [11,13,6,4], k = 2
Output: 4
Explanation: Use both operations on the front of the array: 11 & 13 = 9,
then 9 & 6 = 0, so the array becomes [0,4] and the bitwise OR is 4. No
other way of spending the two operations gets below 4.
```

### Example 3

```text
Input: nums = [4,8,1], k = 0
Output: 13
Explanation: With k = 0 no operation may be performed, so the answer is
simply the OR of the array as given, 4 | 8 | 1 = 13.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] < 2³⁰`
- `0 <= k < nums.length`

## Hints

### Hint 1

A sequence of operations is really a choice of contiguous segmentation:
merges only ever join neighbors, so the final array is one value per
segment, each the AND of its elements, and turning `n` elements into `g`
segments always costs exactly `n - g` operations.

### Hint 2

Decide the answer bit by bit, from bit 29 down. Keep a mask `forbidden` of
bits already forced out of the answer. Adding a lower bit to the mask can
never invalidate a segmentation that avoided the smaller mask, so greedily
keep every high bit out while some valid segmentation still exists.

### Hint 3

To test a candidate mask, sweep left to right and cut a segment as soon as
its running AND is disjoint from the mask — closing early only helps the
segments after it. If the sweep ends with a segment whose AND still
touches the mask, fold that tail into the previous segment; if even the
first segment never cleans, the AND of the whole array touches the mask
and the candidate fails.

### Hint 4

A candidate mask is achievable exactly when the best segmentation it
allows uses at least `nums.length - k` segments, i.e. when the number of
cuts in the greedy sweep is at most `k`.
