# Pair Sum Under the Ceiling

## Description

Pick two entries of an integer array `nums` sitting at different
positions and add them together. Among all such pairs whose sum stays
strictly below `k`, report the largest sum — or report `-1` when no
pair at all fits under the ceiling.

### Example 1

```text
Input: nums = [12,45,7,30,22], k = 50
Output: 42
Explanation: 12 + 30 = 42 fits. Everything involving 45 pushes to or
past 50 — 45 + 7 is 52 — so 42 is the best under the ceiling.
```

### Example 2

```text
Input: nums = [9,40,17,8], k = 20
Output: 17
Explanation: The only pair that stays below 20 is 9 + 8; 40 and 17
are too large to pair with anything.
```

### Example 3

```text
Input: nums = [6,6,6], k = 12
Output: -1
Explanation: Every pair sums to exactly 12, and equality is not
strictly below the ceiling.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 1000`
- `1 <= k <= 2000`

## Hints

### Hint 1

Sort first: once the values are lined up, the usable partners for any
one value form a prefix of the array, which makes them cheap to find.

### Hint 2

Point one pointer at each end. When the pointed-at pair lands under the
ceiling, it is the best possible sum for the smaller value — its
partner is the largest still available — so record it and advance the
left pointer. When the pair reaches or passes `k`, only a smaller
partner can help, so retreat the right pointer. If nothing is ever
recorded, the answer is `-1`.
