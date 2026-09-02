# Consecutive Run Windows I

## Description

You are given an integer array `nums` of length `n` and a positive
integer `k`.

Score an array as follows: it scores its greatest element when its
elements form a strictly ascending run of consecutive integers — each
one exactly one more than the previous — and it scores `-1` otherwise.

Apply that scoring to every window of `k` consecutive elements of
`nums` and return the outcomes in an array `results` of length
`n - k + 1`, where `results[i]` is the score of the window starting at
index `i`.

### Example 1

```text
Input: nums = [4,5,6,7,6,8], k = 2
Output: [5,6,7,-1,-1]
Explanation: The windows [4,5], [5,6], and [6,7] climb by one each, so
they score their last elements. [7,6] descends, and [6,8] skips a
value, so both score -1.
```

### Example 2

```text
Input: nums = [10,11,12,20,21], k = 3
Output: [12,-1,-1]
```

### Example 3

```text
Input: nums = [7,7,7], k = 1
Output: [7,7,7]
Explanation: A one-element window is trivially a consecutive run, so
each element scores itself.
```

### Constraints

- `1 <= n == nums.length <= 500`
- `1 <= nums[i] <= 10⁵`
- `1 <= k <= n`

## Hints

### Hint 1

Checking a whole window from scratch for every start is affordable at
these bounds — a brute-force double loop passes easily.

### Hint 2

A window is a consecutive run exactly when every adjacent pair inside
it differs by one, so a running count of consecutive steps lets each
window be judged instantly.
