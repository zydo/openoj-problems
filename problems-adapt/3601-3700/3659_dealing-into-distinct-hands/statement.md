# Dealing Into Distinct Hands

## Description

You are given an integer array `nums` and an integer `k`.

Decide whether the elements of `nums` can be dealt into one or more hands
such that:

- Every hand holds exactly `k` elements.
- No value ever appears twice within the same hand.
- Every element of `nums` is dealt to exactly one hand.

Return `true` if such a deal exists, and `false` otherwise.

### Example 1

```text
Input: nums = [4,10,7,4,10,7], k = 3
Output: true
Explanation: The six elements form two hands of three: [4,10,7] and
[4,10,7]. Each hand holds three different values, and each copy of 4, 7,
and 10 lands in its own hand.
```

### Example 2

```text
Input: nums = [6,6,6,8], k = 2
Output: false
Explanation: Four elements make two hands, but the value 6 occurs three
times, so one hand would be forced to hold it twice.
```

### Example 3

```text
Input: nums = [2,9,2], k = 2
Output: false
Explanation: Three elements cannot be split into whole hands of size
k = 2, so no deal exists.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= k <= nums.length`

## Hints

### Hint 1

If the deal uses hands of size `k`, what must be true about the length of
`nums` before anything else matters?

### Hint 2

Once the hand count is known, ask how many hands a single value's copies
can spread across without any hand repeating it.

### Hint 3

Count the occurrences of every value; if the largest count exceeds the
number of hands, the deal fails, and otherwise it can always be arranged.
