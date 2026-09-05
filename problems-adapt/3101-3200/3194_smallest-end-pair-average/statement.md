# Smallest End-Pair Average

## Description

Start with an array `nums` holding `n` integers, where `n` is even, and an
empty list of recorded averages. Repeat these two actions until `nums` is
empty:

- take out whichever element is currently smallest and whichever is
  currently largest, and
- append their mean, `(smaller + larger) / 2`, to the recorded list.

After `n / 2` rounds, report the smallest value that was ever recorded.

### Example 1

```text
Input: nums = [12,44,5,27,31,9]
Output: 19.5
Explanation: The rounds unfold as follows:

	round   nums                recorded
	0       [12,44,5,27,31,9]   []
	1       [12,27,31,9]        [24.5]
	2       [12,27]             [24.5,20]
	3       []                  [24.5,20,19.5]

The smallest recorded average, 19.5, is the answer.
```

### Example 2

```text
Input: nums = [6,38]
Output: 22.0
Explanation: One round removes both elements and records (6 + 38) / 2 = 22.0.
```

### Example 3

```text
Input: nums = [3,3,3,3]
Output: 3.0
Explanation: Every round pairs two equal values, so 3.0 is recorded twice and
is also the smallest recorded average.
```

### Constraints

- `2 <= n == nums.length <= 50`, and `n` is even.
- `1 <= nums[i] <= 50`.

## Hints

### Hint 1

Order never changes which two values a round pairs — only their ranks do.
After sorting `nums` ascending, round `k` always combines `nums[k]` with
`nums[n - k - 1]`, so the whole recorded list can be read off the sorted
array without simulating anything.
