# Counting Even-Gap Splits

## Description

An integer array `nums` of length `n` sits in front of you. A split point is
an index `i` with `0 <= i < n - 1`: cutting after position `i` breaks the
array into a left piece `nums[0..i]` and a right piece `nums[i+1..n-1]`,
both of them non-empty.

Count the split points where the difference between the left piece's sum and
the right piece's sum is even.

### Example 1

```text
Input: nums = [5,9,2,8]
Output: 3
Explanation: The total is 24, and every one of the 3 cuts produces an even
difference — for instance [5], [9,2,8] gives 5 - 19 = -14 and
[5,9,2], [8] gives 16 - 8 = 8.
```

### Example 2

```text
Input: nums = [7,4,6]
Output: 0
Explanation: The total is 17, odd, so no cut can produce an even
difference.
```

### Example 3

```text
Input: nums = [3,5]
Output: 1
Explanation: The only cut gives 3 - 5 = -2, which is even.
```

### Constraints

- `2 <= n == nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Write the left and right sums in terms of the array's total: the gap equals
`total - 2 * (right sum)`, which always carries the total's parity.

### Hint 2

So the cuts all agree: if the total is even the answer is `n - 1`, and if
it is odd the answer is `0`.
