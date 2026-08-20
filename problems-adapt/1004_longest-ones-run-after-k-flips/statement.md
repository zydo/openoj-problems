# Longest Ones Run After K Flips

## Description

You are given a binary array `nums` and an integer `k`. Every element of `nums`
is `0` or `1`.

You may change at most `k` of the zeros into ones — you pick which ones, and
fewer is allowed.

Return the length of the longest run of consecutive `1`'s the array can hold
after such changes.

### Example 1

```text
Input: nums = [1,0,1,1,0,1], k = 1
Output: 4
Explanation: Changing the zero at position 4 gives [1,0,1,1,1,1].
The final four positions form a run of length 4, which is the best possible.
```

### Example 2

```text
Input: nums = [1,0,0,1,1], k = 0
Output: 2
Explanation: No changes are allowed, and the two trailing ones are already the
longest run.
```

### Example 3

```text
Input: nums = [0,1,1,0,0,1,1,1,0,1], k = 2
Output: 7
Explanation: Changing the zeros at positions 3 and 4 gives
[0,1,1,1,1,1,1,1,0,1]. Positions 1 through 7 are all ones.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `nums[i]` is either `0` or `1`.
- `0 <= k <= nums.length`

## Hints

### Hint 1

A change only helps where it welds neighboring runs of ones together, so think
of the positions that would become one long run — a window of the array.

### Hint 2

A window can be turned into all ones exactly when it contains at most `k` zeros.

### Hint 3

That removes the flipping itself from the question: find the longest window
obeying the zero budget.

### Hint 4

Sweep such a window across the array — extend the right edge freely, and give
ground on the left only when the zeros inside exceed `k`.
