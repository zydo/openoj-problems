# Valley-Point Indices

## Description

You are given a 0-indexed integer array `nums` of size `n` and a positive
integer `k`.

Call an index `i` (with `k <= i < n - k`) a _valley point_ when both of
these conditions hold:

- The `k` elements immediately before `i` are in non-increasing order.
- The `k` elements immediately after `i` are in non-decreasing order.

Return an array of all valley-point indices, sorted in increasing order.

### Example 1

```text
Input: nums = [1,3,2,1,2,3], k = 2
Output: [3]
Explanation: The only candidate indices are 2 and 3. For index 2 the two
elements before it, [1,3], rise, so it is not a valley point. For index 3
the two before, [3,2], are non-increasing and the two after, [2,3], are
non-decreasing, so it qualifies.
```

### Example 2

```text
Input: nums = [3,2,2,1,1,2,3], k = 2
Output: [2,3,4]
Explanation: Each of the three middle indices is flanked on the left by a
non-increasing pair and on the right by a non-decreasing pair: [3,2] and
[1,1] around index 2, [2,2] and [1,2] around index 3, and [2,1] and [2,3]
around index 4.
```

### Example 3

```text
Input: nums = [5,4,3,2,1], k = 2
Output: []
Explanation: The only candidate is index 2. Its two elements before, [5,4],
are non-increasing, but the two after, [2,1], descend, so the second
condition fails.
```

### Constraints

- `n == nums.length`
- `3 <= n <= 10⁵`
- `1 <= nums[i] <= 10⁶`
- `1 <= k <= n / 2`

## Hints

### Hint 1

Checking one index by scanning both of its windows costs `O(k)`; for many
indices that is far too slow.

### Hint 2

Precompute, for every index, the length of the longest non-increasing run
that ends there, and the length of the longest non-decreasing run that
starts there. Both fall out of two linear sweeps.

### Hint 3

With those run lengths, an index is a valley point exactly when the run
ending at `i - 1` reaches at least `k` and the run starting at `i + 1`
reaches at least `k`.
