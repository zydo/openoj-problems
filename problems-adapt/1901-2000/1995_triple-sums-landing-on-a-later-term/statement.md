# Triple Sums Landing on a Later Term

## Description

Count the ways to pick four positions out of an integer array `nums` so
that the values at the first three of them add up to the value at the
fourth. Formally, a quadruplet of indices `(a, b, c, d)` counts when

- `a < b < c < d`, and
- `nums[a] + nums[b] + nums[c] == nums[d]`

Every distinct choice of indices is a match of its own, even when the
values involved repeat.

### Example 1

```text
Input: nums = [2,4,6,12]
Output: 1
Explanation: The only qualifying quadruplet is (0, 1, 2, 3): the first
three values give 2 + 4 + 6 == 12.
```

### Example 2

```text
Input: nums = [8,3,5,14]
Output: 0
Explanation: The three earlier values sum to 16, which misses the final
14, so nothing matches.
```

### Example 3

```text
Input: nums = [1,2,3,6,6]
Output: 2
Explanation: The triple 1 + 2 + 3 == 6 can land on either of the two 6s:
- (0, 1, 2, 3): 1 + 2 + 3 == 6
- (0, 1, 2, 4): 1 + 2 + 3 == 6
```

### Constraints

- `4 <= nums.length <= 50`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

With at most 50 values, the number of index quadruplets, `C(50, 4)`, is
small enough to check by brute force. What does a plain four-loop cost,
and does it fit the limits?

### Hint 2

You can drop one loop: for each split point, remember how many earlier
position pairs produce each possible sum, then credit every later pair
whose value difference equals a recorded sum.
