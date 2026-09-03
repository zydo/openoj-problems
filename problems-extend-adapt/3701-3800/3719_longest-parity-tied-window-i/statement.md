# Longest Parity-Tied Window I

## Description

You are given an integer array `nums`.

Call a subarray **parity-tied** when it holds exactly as many distinct even
values as distinct odd values. A value counts once per subarray however many
times it repeats there. For instance, `[2, 3, 2]` carries one distinct even
value (the `2`) and one distinct odd value (the `3`), so its two sides tie.

Return the length of the longest parity-tied subarray of `nums`, or `0` if
no subarray ties.

### Example 1

```text
Input: nums = [1,4,7,8,9,6]
Output: 6
Explanation: The entire array ties — three distinct even values [4,8,6]
against three distinct odd values [1,7,9].
```

### Example 2

```text
Input: nums = [4,1,3,6,2]
Output: 4
Explanation: The window [4,1,3,6] ties two distinct evens [4,6] against two
distinct odds [1,3]. Letting the trailing 2 in would break the tie, so 4 is
the best achievable.
```

### Example 3

```text
Input: nums = [5,5,5,2]
Output: 4
Explanation: Repeats never inflate a side — the array holds one distinct odd
value (5) and one distinct even value (2), so the whole array counts.
```

### Example 4

```text
Input: nums = [7,9,3]
Output: 0
Explanation: Every subarray is made of odd values only, so the two sides can
never tie.
```

### Constraints

- `1 <= nums.length <= 1500`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

The length limit is small enough that a quadratic sweep over all windows is
within reach.

### Hint 2

Pin the left end and stretch the right one, maintaining the distinct even
and distinct odd sets of the current window incrementally as elements enter.

### Hint 3

A window ties exactly when the two sets have equal size — and the balance
can break and later heal as the window grows, so test it after every single
extension rather than stopping at the first mismatch.
