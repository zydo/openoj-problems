# Beaten By At Least K Others

## Description

You are given an integer array `nums` of length `n` and an integer `k`.

An element of `nums` counts as beaten when at least `k` elements of the
array are strictly greater than it. Multiplicity matters on both sides:
every position is judged on its own, and the elements beating it are
counted with their duplicates.

Return how many elements of `nums` are beaten.

### Example 1

```text
Input: nums = [4,1,7,3], k = 2
Output: 2
Explanation: 1 is beaten by 4, 7 and 3, and 3 is beaten by 4 and 7, so
both count. 4 has only 7 above it and 7 has nobody.
```

### Example 2

```text
Input: nums = [5,5,10,10,1], k = 2
Output: 3
Explanation: 1 is beaten by all four other elements, and each 5 is
beaten by the two 10s — three positions in all. The 10s are beaten by
nothing.
```

### Example 3

```text
Input: nums = [9,4,4,4,1], k = 3
Output: 1
Explanation: Only 1 clears the bar, with four greater elements. Each 4
sees just the 9 above it, and 9 sees none.
```

### Example 4

```text
Input: nums = [10], k = 0
Output: 1
Explanation: With k = 0 the bar is zero greater elements, so even the
lone element clears it.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `0 <= k < n`

## Hints

### Hint 1

In ascending order, everything strictly greater than a given value sits
in one contiguous suffix — so the per-element question becomes a
question about positions.

### Hint 2

You do not need the whole order: only one value decides everything, the
one sitting at sorted index `n - k - 1`. Selection (quickselect) learns
that value in expected-linear time without sorting the rest.

### Hint 3

Elements strictly below the threshold all qualify; the run of values
equal to it qualifies as a block only when its own strictly-greater
count reaches `k`.
