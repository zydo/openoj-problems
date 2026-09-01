# Reaching One with Integer Combinations

## Description

You are given an array `nums` of positive integers. Pick any subset of its
values and give every picked value its own integer coefficient — positive,
negative, or zero — then add up the weighted results. The array is called
**good** when some such weighted combination of a subset comes out to
exactly `1`.

Return `true` if the array is good, and `false` otherwise.

### Example 1

```text
Input: nums = [6,35]
Output: true
Explanation: Weight the two values as 6*6 + 35*(-1) = 1.
```

### Example 2

```text
Input: nums = [10,21,45]
Output: true
Explanation: The subset {10, 21} suffices: 21*1 + 10*(-2) = 1.
```

### Example 3

```text
Input: nums = [4,6,10]
Output: false
Explanation: Every element is even, so every weighted combination is even
too and can never equal 1.
```

### Example 4

```text
Input: nums = [7]
Output: false
Explanation: The only reachable sums are the multiples of 7.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

For two values, `a*x + b*y = 1` has an integer solution exactly when
`gcd(a, b) = 1` — that is Bézout's identity.

### Hint 2

The same identity extends to any number of values: the reachable sums are
precisely the multiples of the gcd of the whole chosen set.
