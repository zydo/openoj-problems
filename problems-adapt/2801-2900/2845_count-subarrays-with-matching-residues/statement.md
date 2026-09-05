# Count Subarrays with Matching Residues

## Description

You are given an integer array `nums` and two integers `modulo` and `k`.

Call a position a **hit** when its value leaves remainder `k` modulo `modulo`,
that is `nums[i] % modulo == k`. A subarray qualifies when the number of hits
inside it, taken modulo `modulo`, is also `k`.

Count the qualifying subarrays. A subarray is a contiguous, non-empty run of
the array.

### Example 1

```text
Input: nums = [1,4,2,5], modulo = 2, k = 1
Output: 6
Explanation: The hits are the odd values 1 and 5. Six runs hold an odd number
of hits: [1], [1,4], [1,4,2], [4,2,5], [2,5] and [5].
```

### Example 2

```text
Input: nums = [2,7,4], modulo = 3, k = 0
Output: 6
Explanation: No value is a multiple of 3, so every run contains zero hits —
and zero leaves remainder 0, exactly k. All six runs qualify.
```

### Example 3

```text
Input: nums = [5,9,13], modulo = 4, k = 1
Output: 3
Explanation: Every value leaves remainder 1 modulo 4, so a run's hit count is
its length, and the length must leave remainder 1 too — only the three
single-value runs do.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= modulo <= 10⁹`
- `0 <= k < modulo`

## Hints

### Hint 1

Only the yes-or-no fact `nums[i] % modulo == k` matters; the values
themselves can be discarded once the hits are marked.

### Hint 2

Let `count[i]` be the hits among the first `i` positions; every subarray's
hit count is a difference `count[r] - count[l]`.

### Hint 3

The condition on that difference rearranges to `count[l]` sitting at one
fixed residue modulo `modulo` — so each right endpoint pairs with earlier
prefixes of one particular residue.

### Hint 4

Sweep once with a hash map from residue to prefix frequency, consulting it
before recording the current prefix, and seed it with the empty prefix.
