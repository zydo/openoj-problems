# Maximum Square-Compatible Index Sum

## Description

You are given an array `nums` indexed from `1` to `n`. Pick a set of indices
whose elements you will collect, subject to one rule: for any two distinct
chosen indices `i` and `j`, the product `i * j` must be a perfect square.

Return the largest total of collected elements over all non-empty valid
choices. A choice holding a single index vacuously satisfies the rule.

### Example 1

```text
Input: nums = [5,1,4,2,6,3]
Output: 7
Explanation: Indices 1 and 4 can be chosen together since 1 * 4 = 4 is a
perfect square, collecting 5 + 2 = 7. No other compatible pair does better.
```

### Example 2

```text
Input: nums = [2,9,9,9,9,9,9,9,2]
Output: 18
Explanation: 2 * 8 = 16 is a perfect square, so indices 2 and 8 yield
9 + 9 = 18. That beats the square indices 1, 4, 9, whose product pairs are
all squares, but which collect only 2 + 9 + 2 = 13.
```

### Example 3

```text
Input: nums = [999999999]
Output: 999999999
Explanation: With one index chosen there is no pair to check, so the single
element is collected.
```

### Constraints

- `1 <= n == nums.length <= 10^4`
- `1 <= nums[i] <= 10^9`

## Hints

### Hint 1

Write each index as a squarefree part times a perfect square — the
squarefree part being the product of the primes whose exponent in the
index's factorization is odd, e.g. `18 = 2 x 3²` has squarefree part `2`.

### Hint 2

Multiplying two indices gives a square exactly when the odd-exponent primes
of one are cancelled by the same primes in the other — that is, when their
squarefree parts agree.

### Hint 3

So the legal choices are exactly the sets of indices sharing one squarefree
part. Bucket the indices by that part, sum each bucket, keep the best.
