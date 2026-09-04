# The Heaviest Palindromic Streak

## Description

A **streak** is a contiguous block of `nums`, and a streak is _palindromic_
when it reads the same forwards and backwards. Every element of `nums` is a
positive integer.

Among all palindromic streaks, find the one with the largest element sum and
return that sum. Single elements are palindromic streaks too.

### Example 1

```text
Input: nums = [4,7,4,9]

Output: 15

Explanation:

The streak [4,7,4] reads the same both ways and sums to 4 + 7 + 4 = 15, which
no other palindromic streak beats.
```

### Example 2

```text
Input: nums = [2,2,5,2,2,8]

Output: 13

Explanation:

The streak [2,2,5,2,2] is a palindrome, and its sum is 13 — larger than any
other palindromic block, such as [2,5,2] (sum 9).
```

### Example 3

```text
Input: nums = [9,3,3,3,9,1]

Output: 27

Explanation:

The streak [9,3,3,3,9] is a palindrome worth 9 + 3 + 3 + 3 + 9 = 27. The
trailing 1 cannot be folded into any palindrome, so 27 stands.
```

### Example 4

```text
Input: nums = [6,5]

Output: 6

Explanation:

No streak of length 2 is a palindrome here, so the best option is the largest
single element, 6.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

## Hints

### Hint 1

Positivity is the lever: for a fixed center, extending a palindrome only adds
positive values, so the longest palindrome at each center is automatically
its richest.

### Hint 2

Manacher's algorithm applies to arrays of integers exactly as it does to
text, producing the maximal odd-length and even-length radius at every center
in linear time.

### Hint 3

Pair the radii with prefix sums so any streak's sum is a constant-time
subtraction.

### Hint 4

Answer with the largest sum seen across all centers and both parities — a
single element is just the radius-1 odd case, so it needs no special branch.
