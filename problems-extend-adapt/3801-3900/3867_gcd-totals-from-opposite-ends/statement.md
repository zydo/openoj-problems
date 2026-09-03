# Gcd Totals From Opposite Ends

## Description

You are given an integer array `nums` of length `n`.

Build a companion array `b`, one entry per position. For each index `i`,
let `peak` be the largest value appearing anywhere in `nums[0..i]`,
inclusive, and define `b[i] = gcd(nums[i], peak)` — the greatest common
divisor of the element and the best value seen so far, itself included.

Then sort `b` in non-decreasing order and fold it inward from both ends:
repeatedly take the smallest value not yet used and the largest value not
yet used, take the gcd of that pair, and add it to a running total. When
`n` is odd, the lone middle value that remains after the ends meet counts
for nothing.

Return the accumulated total.

### Example 1

```text
Input: nums = [4,12,6]
Output: 4
Explanation: The running peaks are 4, 12, 12, so
b = [gcd(4,4), gcd(12,12), gcd(6,12)] = [4, 12, 6], which sorts to
[4, 6, 12]. The outer pair contributes gcd(4, 12) = 4, and the leftover
middle value 6 is skipped. The total is 4.
```

### Example 2

```text
Input: nums = [10,4,25,50]
Output: 7
Explanation: The running peaks are 10, 10, 25, 50, so
b = [10, 2, 25, 50], which sorts to [2, 10, 25, 50]. Folding inward:
gcd(2, 50) = 2 and gcd(10, 25) = 5. The total is 2 + 5 = 7.
```

### Example 3

```text
Input: nums = [7,21,14,42,35]
Output: 14
Explanation: The running peaks are 7, 21, 21, 42, 42, so
b = [7, 21, 7, 42, 7], which sorts to [7, 7, 7, 21, 42]. Folding inward:
gcd(7, 42) = 7 and gcd(7, 21) = 7, while the middle 7 is skipped. The
total is 7 + 7 = 14.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

A single left-to-right sweep that carries the running maximum produces
every entry of `b` — no per-index recomputation of the prefix maximum is
needed.

### Hint 2

Once `b` is sorted, the smallest-with-largest pairing is just a
two-pointer walk, one pointer at each end moving inward.

### Hint 3

The walk ends when the pointers meet or cross; that naturally leaves an
odd-length array's middle element unused, with no special case.
