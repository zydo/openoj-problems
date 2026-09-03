# Best Triplet Sum Divisible By Three

## Description

You are given an integer array `nums`.

Pick exactly three elements of the array whose sum is a multiple of three.
Among all such triplets, return the largest achievable sum. If no triplet
qualifies, return 0.

### Example 1

```text
Input: nums = [4,6,9,12]
Output: 27
Explanation: 6 + 9 + 12 = 27, and 27 is divisible by 3. Every element here
leaves remainder 1 or 0, so no mix of remainders beats this.
```

### Example 2

```text
Input: nums = [100000,99999,99998,1]
Output: 299997
Explanation: 99998 leaves remainder 2, 100000 leaves remainder 1, and
99999 leaves remainder 0; 99998 + 99999 + 100000 = 299997, which is
divisible by 3.
```

### Example 3

```text
Input: nums = [2,5,8,11]
Output: 24
Explanation: All four values leave remainder 2, and 2 + 2 + 2 is divisible
by 3, so the three largest give 11 + 8 + 5 = 24.
```

### Example 4

```text
Input: nums = [3,3,1]
Output: 0
Explanation: No three-element selection sums to a multiple of 3.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

A sum is divisible by 3 exactly when the remainders of its terms are, so
sort the values into three buckets by `x % 3`.

### Hint 2

Only four remainder shapes produce a multiple of 3: `0+0+0`, `1+1+1`,
`2+2+2`, and `0+1+2`.

### Hint 3

Inside any shape the biggest sum uses the largest values of each bucket, so
the three largest per bucket are all that can matter.

### Hint 4

Evaluate the four shapes over those top values — at most nine numbers — and
return the best, or 0 when no shape fits.
