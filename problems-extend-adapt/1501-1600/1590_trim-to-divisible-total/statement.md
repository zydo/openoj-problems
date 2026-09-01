# Trim to a Divisible Total

## Description

An array of positive integers `nums` and an integer `p` are given. Your
job is to cut exactly one contiguous piece out of `nums` — possibly an
empty one — so that the sum of whatever survives is a multiple of `p`.
Cutting away the entire array is not permitted.

Return the length of the shortest piece whose removal achieves this, or
`-1` when no allowed removal works.

### Example 1

```text
Input: nums = [8,3,7], p = 5
Output: 1
Explanation: The elements total 18, which leaves remainder 3 when
divided by 5. Dropping the single element 3 leaves 8 + 7 = 15, a
multiple of 5, so the shortest removal has length 1.
```

### Example 2

```text
Input: nums = [2,2,3], p = 3
Output: 2
Explanation: The total is 7, one above a multiple of 3, but no single
element is congruent to 1 mod 3. Removing the two leading 2s leaves
just [3], whose sum is divisible by 3.
```

### Example 3

```text
Input: nums = [4,9,3], p = 4
Output: 0
Explanation: The elements total 16, already a multiple of 4, so an
empty removal suffices.
```

### Example 4

```text
Input: nums = [5,11,2,6], p = 7
Output: -1
Explanation: The total leaves remainder 3 mod 7, and no proper
contiguous piece of the array sums to something congruent to 3 mod 7 —
only the whole array does, which may not be removed.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= p <= 10^9`

## Hints

### Hint 1

Work with prefix sums taken modulo `p`: the sum of any piece is the
difference of two prefix sums.

### Hint 2

If the whole array leaves remainder `r` mod `p`, the piece you remove
must itself leave remainder `r` — that is what cancels the excess.

### Hint 3

Sweep once with a map from each prefix remainder to the latest index
where it appeared; the newest occurrence yields the shortest closing
piece.
