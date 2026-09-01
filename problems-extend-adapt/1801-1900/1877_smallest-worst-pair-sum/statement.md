# Smallest Worst Pair Sum

## Description

The sum of a pair `(a, b)` is `a + b`, and a pairing's worst pair sum is
the largest of those sums across all its pairs. For instance, the pairs
`(1,5)`, `(2,3)`, `(4,4)` have a worst pair sum of `max(6, 5, 8) = 8`.

You are given an array `nums` of even length `n`. Split its elements into
`n / 2` pairs so that every element is used exactly once, choosing the
split that keeps the worst pair sum as small as possible. Report that
smallest achievable worst pair sum.

### Example 1

```text
Input: nums = [6,1,9,4]
Output: 10
Explanation: Pair (1,9) and (4,6). The pair sums are 10 and 10, so the
worst is 10, and no split can push the largest sum below that.
```

### Example 2

```text
Input: nums = [10,2,7,5,1,9]
Output: 12
Explanation: Pairing (1,10), (2,9), and (5,7) gives sums 11, 11, and 12,
so the worst pair sum is 12.
```

### Example 3

```text
Input: nums = [5,5]
Output: 10
Explanation: The only possible pairing is (5,5), whose sum is 10.
```

### Constraints

- `n == nums.length`
- `2 <= n <= 10⁵`
- `n` is even.
- `1 <= nums[i] <= 10⁵`

### Hint 1

Sorting the array first makes it much easier to see which elements
belong together.

### Hint 2

The largest element has to be paired with someone — pairing it with the
smallest remaining element is never worse than any other choice, and
reasoning the same way about what is left finishes the pairing.
